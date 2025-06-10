import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { TestimonialGrid } from "../../Components/Testimonials/TestimonialGrid";
import { Link } from "react-router-dom";
import Baseurl from "../../Baseurl";
import testimonialData from "../../JsonData/testimonialData";

export const TestimonialSlider = () => {
  const Weburl = Baseurl.WebUrl;
  const splideRef = useRef(null);

  const options = {
    perPage: 3,
    pagination: true,
    gap: "1.5rem",
    speed: 1000,
    focus: 0,
    type: "loop",
    arrows: false, // We'll use custom arrows
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    breakpoints: {
      1400: { perPage: 3 },
      1200: { perPage: 3 },
      992: { perPage: 2 },
      576: { perPage: 1, gap: "0.75rem" },
    },
  };

  const handlePrev = () => splideRef.current?.splide?.go("<");
  const handleNext = () => splideRef.current?.splide?.go(">");

  return (
    <section
      className="p-top-60 p-bottom-60 bg-gray-gradient home-testimonials"
      data-aos="fade"
    >
      <div className="container">
        <div className="d-xl-flex align-items-xl-center mb-3">
          <div className="block-title me-auto">
            <small className="sub-title">Genuine Reviews</small>
            <h2 className="h1 title">Tourists talk about us</h2>
          </div>
          <div className="d-md-flex justify-content-md-between mt-3">
            <div className="d-md-flex align-items-md-center me-md-4">
              <div className="extra-info me-4">
                <strong>95K+</strong>
                <span>Tour bookings</span>
              </div>
              <div className="extra-info me-4">
                <strong>4.9</strong>
                <span className="fw-medium text-secondary">
                  <span className="star-rate-view star-rate-size-sm">
                    <span className="star-value rate-50"></span>
                  </span>
                  <span>(+85K reviews)</span>
                </span>
              </div>
            </div>
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
          className="testimonials-slider-1"
        >
          {testimonialData.map((data, index) => (
            <SplideSlide key={index}>
              <TestimonialGrid testiData={data} />
            </SplideSlide>
          ))}
        </Splide>
        <p className="fw-normal text-secondary text-md-end mb-0 pt-4 mt-5 mt-md-0">
          <Link to={`${Weburl}/testimonials`} className="fw-medium">
            <span>View all testimonials</span>
            <i className="hicon hicon-flights-one-ways"></i>
          </Link>
        </p>
      </div>
    </section>
  );
};
