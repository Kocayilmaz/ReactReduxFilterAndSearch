import React, { useEffect, useState } from 'react';
import { fetchCardItems } from '../util/fetchCardItems';
import { CustomCard } from './CustomCard';
import { SimpleGrid } from '@mantine/core';

export const BoxContainer = () => {
  const [cardData, setCardData] = useState([]);
  
  useEffect(() => {
    fetchCardItems()
      .then((res) => {
        setCardData(res.data.items);
      })
      .catch((err) => console.error(err.message));
  }, []);

  // Kartları iki gruba ayırın
  const half = Math.ceil(cardData.length / 2);
  const firstHalf = cardData.slice(0, half);
  const secondHalf = cardData.slice(half);

  return (
    <div className="big-box-container">
      {firstHalf.length > 0 && (
        <SimpleGrid cols={4} spacing="lg" breakpoints={[
          { maxWidth: 1280, cols: 3 },
          { maxWidth: 1024, cols: 2 },
          { maxWidth: 768, cols: 1 },
        ]}>
          {firstHalf.map((card) => (
            <CustomCard
              key={card.title}
              title={card.title}
              desc={card.desc}
              imageLink={card.image}
              buttonText="Book classic tour now"
            />
          ))}
        </SimpleGrid>
      )}
      {secondHalf.length > 0 && (
        <SimpleGrid cols={4} spacing="lg" breakpoints={[
          { maxWidth: 1280, cols: 3 },
          { maxWidth: 1024, cols: 2 },
          { maxWidth: 768, cols: 1 },
        ]}>
          {secondHalf.map((card) => (
            <CustomCard
              key={card.title}
              title={card.title}
              desc={card.desc}
              imageLink={card.image}
              buttonText="Book classic tour now"
            />
          ))}
        </SimpleGrid>
      )}
    </div>
  );
};
