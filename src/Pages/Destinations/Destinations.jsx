import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { SubBanner } from "../../Components/Banners/SubBanner";
import blogsBanner from "../../Images/destination-banner.webp";
import { Destination } from "../../Components/Destinations/Destination";
import destinationData from "../../JsonData/destinationData";

export const Destinations = () => {
  const [visibleCount, setVisibleCount] = useState(12);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const visibleDestinations = destinationData.slice(0, visibleCount);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Explore Top Travel Destinations | Trypexpert – Plan Your Perfect
            Getaway
          </title>
          <meta
            name="description"
            content="Discover the best travel destinations around the world with Trypexpert. From exotic beaches to cultural cities, find your next adventure with expert tips and guides."
          />
        </Helmet>
      </HelmetProvider>
      <SubBanner
        title="Destinations"
        breadcrumb="Destinations"
        image={blogsBanner}
      />
      <section
        className="p-top-60 p-bottom-60 bg-gray-gradient"
        data-aos="fade"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="block-title">
                <small className="sub-title">Many tourists visit</small>
                <h2 className="h1 title lh-sm">Top destinations</h2>
              </div>
            </div>
          </div>
          <div className="row gy-4 pt-4">
            {visibleDestinations.map((data) => (
              <div className="col-6 col-md-4 col-lg-2" key={data.id}>
                <Destination destiData={data} />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < destinationData.length && (
            <div className="text-center pt-3">
              <hr />
              <button
                className="theme btn btn-primary px-4"
                onClick={handleLoadMore}
                aria-label="Load more"
              >
                <i className="hicon hicon-refresh pe-2"></i> Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
