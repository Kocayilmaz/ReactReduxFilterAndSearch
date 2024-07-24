import React, { useContext } from "react";
import { CustomCard } from "./CustomCard";
import { SimpleGrid } from "@mantine/core";
import { Context } from "./MainContainer";
import { useSelector } from "react-redux";

export const BoxContainer = () => {
  const cardData = useSelector((store) => store.cardData);
  const { filteredData } = useContext(Context);

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
          {cardData.map((card, index) => (
            <CustomCard
              key={index}
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
