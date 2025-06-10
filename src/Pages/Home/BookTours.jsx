import React from "react";
import fomeSubBanner from "../../Images/home-sub-banner.webp";
import { Link } from "react-router-dom";
import Baseurl from "../../Baseurl";

export const BookTours = () => {
  const Weburl = Baseurl.WebUrl;
  return (
    <section className="hero aos-init aos-animate" data-aos="fade">
      <div className="hero-bg">
        <img
          src={fomeSubBanner}
          alt="Book Your Tour"
          className="img-fluid"
          loading="lazy"
        />
      </div>
      <div className="bg-content container">
        <div className="p-top-150 p-bottom-150">
          <div className="text-center">
            <div className="block-title">
              <small className="sub-title text-light">Start Exploring</small>
              <h2 className="h1 title text-white">
                Are you ready for adventures to Trypexpert?
              </h2>
            </div>
            <div className="d-md-inline-flex align-items-md-center">
              <Link
                to={`${Weburl}/activities`}
                className="btn btn-primary btn-uppercase mnw-180 me-2 ms-2 mt-4"
              >
                <i className="hicon hicon hicon-bold hicon-menu-calendar pe-2"></i>
                <span>Book tours</span>
              </Link>
              <Link
                to={`${Weburl}/contact-us`}
                className="btn btn-outline-light btn-uppercase mnw-180 me-2 ms-2 mt-4"
              >
                <i className="hicon hicon hicon-email-envelope pe-2"></i>
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
