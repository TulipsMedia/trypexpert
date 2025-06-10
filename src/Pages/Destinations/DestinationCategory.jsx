import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import adventureData from "../../JsonData/adventureData";
import { AdventureFilter } from "../../Components/Filters/AdventureFilter";

export const DestinationCategory = ({
  selectedAdventureIds,
  toggleAdventure,
}) => {
  return (
    <div className="destination-category">
      <Splide
        options={{
          perPage: 8,
          perMove: 1,
          gap: "1rem",
          pagination: false,
          arrows: true,
          breakpoints: {
            1200: { perPage: 6 },
            768: { perPage: 5 },
            480: { perPage: 2 },
          },
        }}
        aria-label="Adventure Types"
      >
        {adventureData.map((data) => (
          <SplideSlide key={data.id}>
            <AdventureFilter
              advenType={data}
              selectedAdventureIds={selectedAdventureIds}
              toggleAdventure={toggleAdventure}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
