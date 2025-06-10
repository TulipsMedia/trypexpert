import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Destination } from "../../Components/Destinations/Destination";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import Baseurl from "../../Baseurl";
import destinationData from "../../JsonData/destinationData";


export const TopDestination = () => {
  const Weburl = Baseurl.WebUrl;
  const splideRef = useRef(null);

  const options = {
    type: "loop",
    perPage: 5,
    pagination: true,
    gap: "1.5rem",
    speed: 1000,
    focus: 0,
    autoplay: true,
    interval: 3000,
    arrows: false, // ❗disable default arrows
    breakpoints: {
      1400: {
        perPage: 4, // Tablet 3 (below 1400px)
        padding: { right: "80px" },
      },
      1200: {
        perPage: 4, // Tablet 2 (below 1200px)
        padding: { right: "60px" },
      },
      992: {
        perPage: 3, // Tablet 2 (below 992px)
        padding: { right: "40px" },
      },
      576: {
        perPage: 2,
        // focus: "left",
        // padding: { right: "50%" }, // Show 1.5 slides
        gap: "0.75rem",
      },
    },
  };

  // Custom navigation handlers
  const handlePrev = () => splideRef.current?.splide?.go("<");
  const handleNext = () => splideRef.current?.splide?.go(">");

  return (
    <section className="p-top-60 p-bottom-60 bg-gray-gradient" data-aos="fade">
      <div className="container">
        <div className="destination-slider">
          <div className="d-xl-flex align-items-xl-center mb-3">
            <div className="block-title me-auto">
              <small className="sub-title">Many tourists visit</small>
              <h2 className="h1 title">Top destinations</h2>
            </div>
            <div className="d-md-flex justify-content-md-between mt-3">
              <div className="extra-info me-5">
                <strong>50+</strong>
                <span>Attractive destinations</span>
              </div>
              {/* ✅ Custom arrows here */}
              <div className="splide__arrows splide__arrows__right">
                <button
                  className="splide__arrow splide__arrow--prev me-2"
                  onClick={handlePrev}
                  aria-label="Slide prev"
                >
                  <i className="hicon hicon-edge-arrow-left"></i>
                </button>
                <button
                  className="splide__arrow splide__arrow--next"
                  onClick={handleNext}
                  aria-label="Slide next"
                >
                  <i className="hicon hicon-edge-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          <Splide
            options={options}
            ref={splideRef}
            aria-label="Top Destinations"
          >
            {destinationData.map((data) => (
              <SplideSlide key={data.id}>
                <Destination destiData={data} />
              </SplideSlide>
            ))}
          </Splide>
        </div>

        <p className="fw-normal text-secondary text-md-end mb-0 pt-4 mt-5 mt-md-0">
          <Link to={`${Weburl}/destinations`} className="fw-medium">
            <span>View all destinations</span>
            <i className="hicon hicon-flights-one-ways ps-1"></i>
          </Link>
        </p>
      </div>
    </section>
  );
};
