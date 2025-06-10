import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Clients } from "../../Components/Clients/Clients";

export const ClientSlider = () => {
  const splideRef = useRef(null);

  // Configure Splide options
  const options = {
    perPage: 7,
    gap: "2.2rem",
    speed: 1000,
    focus: 0,
    type: "loop",
    pagination: false,
    arrows: false, // Disable default arrows since we're using custom ones
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    breakpoints: {
      1400: {
        perPage: 6,
        padding: { right: "100px" },
      },
      1200: {
        perPage: 5,
        padding: { right: "80px" },
      },
      992: {
        perPage: 4,
        padding: { right: "60px" },
      },
      576: {
        perPage: 2,
        focus: "left",
        padding: { right: "25%" }, // 1.5 slides visible
        gap: "0.75rem",
      },
    },
  };

  // Sample client data - you can expand this array with more clients
  const clients = [
    {
      image:
        "https://rathincom.b-cdn.net//app-assets/media/about_us_part_img/about_us_part_image_20240321130539_140.webp",
      name: "At the top of Burj Khalifa",
    },
    {
      image:
        "https://rathincom.b-cdn.net//app-assets/media/about_us_part_img/about_us_part_image_20240321135207_319.webp",
      name: "Wild Wadi",
    },
    {
      image:
        "https://rathincom.b-cdn.net//app-assets/media/about_us_part_img/about_us_part_image_20240321134916_545.webp",
      name: "Dolphine Bay",
    },
    {
      image:
        "https://rathincom.b-cdn.net//app-assets/media/about_us_part_img/about_us_part_image_20240321132349_499.webp",
      name: "Skydive Dubai",
    },
    {
      image:
        "https://rathincom.b-cdn.net//app-assets/media/about_us_part_img/about_us_part_image_20240321130044_106.webp",
      name: "Qasr Alwatan",
    },
    {
      image:
        "https://rathincom.b-cdn.net//app-assets/media/about_us_part_img/about_us_part_image_20240321132349_479.webp",
      name: "Dubai Miracle GardenBig",
    },
    {
      image:
        "https://rathincom.b-cdn.net//app-assets/media/about_us_part_img/about_us_part_image_20240321130539_76.webp",
      name: "Bus Dubai",
    },
  ];

  // Handle custom navigation
  const handlePrev = () => {
    if (splideRef.current && splideRef.current.splide) {
      splideRef.current.splide.go("<");
    }
  };

  const handleNext = () => {
    if (splideRef.current && splideRef.current.splide) {
      splideRef.current.splide.go(">");
    }
  };

  return (
    <section className="p-top-60 p-bottom-60" data-aos="fade">
      <div className="container">
        <div className="d-md-flex justify-content-md-between mb-3">
          <div className="block-title me-auto">
            <small className="sub-title">Together with the Best for You</small>
            <h2 className="h1 title">Our Partners</h2>
          </div>
          <div className="splide__arrows splide__arrows__right">
            <button
              className="splide__arrow splide__arrow--prev me-2"
              type="button"
              onClick={handlePrev}
              aria-label="Slide prev"
            >
              <i className="hicon hicon-edge-arrow-left"></i>
            </button>
            <button
              className="splide__arrow splide__arrow--next"
              type="button"
              onClick={handleNext}
              aria-label="Slide next"
            >
              <i className="hicon hicon-edge-arrow-right"></i>
            </button>
          </div>
        </div>

        <Splide
          options={options}
          ref={splideRef}
          className="testimonials-slider-1"
        >
          {clients.map((item, index) => (
            <SplideSlide key={index}>
              <Clients name={item.name} src={item.image} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};
