import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { SubBanner } from "../Components/Banners/SubBanner";
import TestiBanner from "../Images/testimonials.webp";
import { TestimonialGrid } from "../Components/Testimonials/TestimonialGrid";
import testimonialData from "../JsonData/testimonialData";

export const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(10);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  const visibleTestimonials = testimonialData.slice(0, visibleCount);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            What Our Clients Say | Trypexpert – Real Travel Experiences &
            Reviews
          </title>
          <meta
            name="description"
            content="Discover genuine reviews and testimonials from happy travelers who explored the world with Trypexpert. Real stories. Trusted experiences."
          />
        </Helmet>
      </HelmetProvider>
      <SubBanner
        title="Testimonials"
        breadcrumb="Testimonials"
        image={TestiBanner}
      />
      <section
        className="p-top-60 p-bottom-60 bg-gray-gradient"
        data-aos="fade"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="block-title">
                <small className="sub-title"> Genuine Reviews</small>
                <h2 className="h1 title lh-sm">Tourists talk about us</h2>
              </div>
            </div>
          </div>
          <div className="row pt-4">
            {visibleTestimonials.map((data) => (
              <div className="col-lg-6 mb-4" key={data.id}>
                <TestimonialGrid testiData={data} />
              </div>
            ))}
          </div>
          {/* Load More Button */}
          {visibleCount < testimonialData.length && (
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
