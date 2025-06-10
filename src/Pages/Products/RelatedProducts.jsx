import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import { TourList } from "../../Components/TourList/TourList";
import Baseurl from "../../Baseurl";
import tourData from "../../JsonData/tourData";

export const RelatedProducts = () => {
  const Weburl = Baseurl.WebUrl;
  const splideRef = useRef(null);

  const options = {
    type: "loop",
    perPage: 4,
    pagination: true,
    gap: "1.5rem",
    speed: 1000,
    focus: 0,
    autoplay: false,
    interval: 3000,
    arrows: false,
    breakpoints: {
      1400: { perPage: 3, padding: { right: "100px" } },
      1200: { perPage: 2, padding: { right: "80px" } },
      992: { perPage: 2, padding: { right: "60px" } },
      576: {
        perPage: 1,
        focus: "left",
        padding: { right: "25%" },
        gap: "0.75rem",
      },
    },
  };

  const handlePrev = () => {
    if (splideRef.current?.splide) splideRef.current.splide.go("<");
  };

  const handleNext = () => {
    if (splideRef.current?.splide) splideRef.current.splide.go(">");
  };

  return (
    <div className="container pt-5">
      <div className="destination-slider">
        <div className="d-xl-flex align-items-xl-center mb-3">
          <div className="block-title me-auto">
            <small className="sub-title">Many tourists choose</small>
            <h2 className="h1 title">The best of Dubai</h2>
          </div>
          <div className="d-md-flex justify-content-md-between mt-3">
            <div className="extra-info me-5">
              <strong>250+</strong>
              <span>Attractive adventures</span>
            </div>
            <div className="splide__arrows splide__arrows__right">
              <button
                type="button"
                className="splide__arrow splide__arrow--prev me-2"
                onClick={handlePrev}
                aria-label="Go to prev"
              >
                <i className="hicon hicon-edge-arrow-left"></i>
              </button>
              <button
                type="button"
                className="splide__arrow splide__arrow--next"
                onClick={handleNext}
                aria-label="Go to next"
              >
                <i className="hicon hicon-edge-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <Splide
          options={options}
          className="tour-grid"
          ref={splideRef}
          aria-label="Best of Dubai"
        >
          {tourData.map((data) => (
            <SplideSlide key={data.id}>
              <TourList tourListData={data} />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <p className="fw-normal text-secondary text-md-end mb-0 pt-4 mt-5 mt-md-0">
        <Link to={`${Weburl}/activities`} className="fw-medium">
          <span>View all tours</span>
          <i className="hicon hicon-flights-one-ways ps-1"></i>
        </Link>
      </p>
    </div>
  );
};
