import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { SubBanner } from "../../Components/Banners/SubBanner";
import productsImg from "../../Images/destination-banner.webp";
import { ProductsList } from "./ProductsList";

export const Products = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Exciting Tours & Activities | Trypexpert</title>
          <meta
            name="description"
            content="Discover thrilling adventures in Trypexpert! Explore our curated list of tours and activities. Book your Dubai adventure today!"
          />
        </Helmet>
      </HelmetProvider>
      <SubBanner
        title="Exciting Tours & Activities"
        breadcrumb="Tours & Activities"
        image={productsImg}
      />
      <ProductsList />
    </>
  );
};
