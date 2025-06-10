import React from "react";
import { Highlights } from "./Highlights";
import { TopDestination } from "./TopDestination";
import { Adventure } from "./Adventure";
import { BookTours } from "./BookTours";
import { TestimonialSlider } from "./TestimonialSlider";
import { ClientSlider } from "./ClientSlider";
import { HomeBanner } from "../../Components/Banners/HomeBanner";
import { HomeTourList } from "./HomeTourList";
import { IconHilights } from "./IconHighlights";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const Home = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Trypexpert | Unforgettable Adventure & Travel Experiences in the UAE
          </title>
          <meta
            name="description"
            content="Discover thrilling travel experiences with Trypexpert. From desert safaris to city tours, we craft unforgettable adventures across Dubai and the Emirates. Book your dream trip today!"
          />
        </Helmet>
      </HelmetProvider>
      <HomeBanner />
      <Highlights />
      <TopDestination />
      <HomeTourList />
      <IconHilights />
      <Adventure />
      <BookTours />
      <TestimonialSlider />
      <ClientSlider />
    </>
  );
};
