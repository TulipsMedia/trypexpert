import React from "react";
import { useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { DestinationProducts } from "./DestinationProducts";
import { IconHilights } from "../Home/IconHighlights";
import destinationData from "../../JsonData/destinationData";
import { ProductBanner } from "../../Components/Banners/ProductBanner";

export const DestinationDetails = () => {
    const { slug } = useParams();

    // Find the matching destination
    const destination = destinationData.find((item) => item.slug === slug);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{destination.city} | Trypexpert</title>
          <meta
            name="description"
            content="Discover the best travel destinations around the world with Trypexpert. From exotic beaches to cultural cities, find your next adventure with expert tips and guides."
          />
        </Helmet>
      </HelmetProvider>
      <ProductBanner
        title={destination.city}
        breadcrumb={destination.city}
        image={destination.image}
      />
      <DestinationProducts destinationData={destination} />
      <IconHilights />
    </>
  );
};
