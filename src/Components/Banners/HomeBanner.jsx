import React, { useEffect } from "react";
import { Carousel } from "bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Banner1 from "../../Images/banner-1.webp";
import Banner2 from "../../Images/banner-2.webp";
import SearchInput from "../Search/SearchInput";

export const HomeBanner = () => {
  useEffect(() => {
    const carouselEl = document.querySelector("#heroCarousel");
    if (carouselEl) {
      new Carousel(carouselEl, {
        interval: 3000,
        ride: "carousel",
        pause: false,
      });
    }
  }, []);

  return (
    <section className="hero">
      <div
        id="heroCarousel"
        className="hero-carousel carousel slide carousel-fade"
      >
        <div className="carousel-inner">
          <div className="hero-bg carousel-item active">
            <img
              src={Banner1}
              alt="Romantic Nature"
              className="img-fluid"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="hero-bg carousel-item">
            <img
              src={Banner2}
              alt="Mountain Ranges"
              className="img-fluid"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        <div className="hero-caption text-sm-start">
          <div className="container">
            <div className="row">
              <div className="col-12 col-xxl-6 col-xl-7 col-md-10">
                <div className="hero-sub-title">
                  <span>Book activities, tours and experiences</span>
                </div>
                <h2 className="display-3 hero-title mb-4 mb-md-5">
                  Travel that shapes you
                </h2>
                <SearchInput />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
