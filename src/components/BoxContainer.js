import React, { useState, useEffect } from 'react';
import { fetchCardItems } from '../util/fetchCardItems';
import { CustomCard } from './CustomCard';
import { SimpleGrid } from '@mantine/core';

export const BoxContainer = ({ filteredData }) => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    if (!filteredData.length) {
      fetchCardItems()
        .then((res) => {
          setCardData(res.data.items);
        })
        .catch((err) => console.error(err.message));
    } else {
      setCardData(filteredData);
    }
  }, [filteredData]);

  return (
    <div className="big-box-container">
      {cardData.length > 0 && (
        <SimpleGrid
          cols={4}
          spacing="lg"
          breakpoints={[
            { maxWidth: 1280, cols: 3 },
            { maxWidth: 1024, cols: 2 },
            { maxWidth: 768, cols: 1 },
          ]}
        >
          {cardData.map((card) => (
            <CustomCard
              key={card.title}
              title={card.title}
              desc={card.desc}
              imageLink={card.image}
            />
          ))}
        </SimpleGrid>
      )}
    </div>
  );
};
