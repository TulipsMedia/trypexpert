import React from "react";
import Logo from "../../Images/fav.svg";
import aboutImg from "../../Images/about-us.webp";
import { Link } from "react-router-dom";
import Baseurl from "../../Baseurl";

export const AboutContent = () => {
  const Weburl = Baseurl.WebUrl;
  return (
    <section className="p-top-60 p-bottom-60 bg-gray-gradient" data-aos="fade">
      <div className="container">
        <div className="row g-0 align-items-center">
          <div className="col-12 col-xl-6 order-1 order-xl-0">
            <div className="image-info image-info-vertical me-xl-5">
              <div className="vertical-title">
                <small className="ls-2">
                  <strong className="text-primary fw-semibold">
                    Sine 2012
                  </strong>{" "}
                  - <strong className="text-body fw-semibold">13 years</strong>{" "}
                  of experience
                </small>
              </div>
              <div className="image-center rounded">
                <img
                  src={aboutImg}
                  className="w-100 img-fluid"
                  alt="about trypexpert"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="position-absolute top-0 start-0 ms-4 mt-4">
                <div className="vertical-award rounded shadow-sm">
                  <div className="award-content">
                    <img
                      src={Logo}
                      className="img-fluid"
                      width="50px"
                      alt="TrypExpert"
                      loading="lazy"
                    />
                  </div>
                  <div className="award-footer">
                    <small>TRYPEXPERT</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 order-0 order-xl-1">
            <div className="pt-xl-4 mb-xl-0 mb-5">
              <div className="block-title">
                <small className="sub-title"> About Trypexpert</small>
                <h2 className="h1 title lh-sm">
                  We are dedicated to turning your travel dreams into
                  unforgettable realities.
                </h2>
              </div>
              <p>
                With years of experience in crafting exceptional travel
                experiences, our modern and thoughtfully designed vacation
                packages and tourism services are tailored to meet your every
                need. Our mission is to enrich your life with extraordinary
                adventures and ensure you live a life full of unforgettable
                moments. Our goal is to deliver unparalleled service at every
                step of your journey. Our passionate team is here to guide you
                through exploring Dubai and other Emirates, offering expertly
                curated travel packages that immerse you in the stunning beauty
                of the United Arab Emirates and its enchanting deserts. We aim
                to provide you with experiences that surpass your wildest
                imagination.
              </p>
              <p>
                The growing enthusiasm for travel today motivates us to meet
                your vacation needs with excellence. Our vision is to offer
                seamless experiences and establish ourselves as a leading travel
                operator in the ever-evolving tourism industry. Whether you’re
                booking a theme park visit, a desert safari, or city tours,
                Trypexpert provides everything you need under one roof to ensure
                your trip is both memorable and fulfilling.
              </p>
              <div className="pt-3">
                <Link
                  to={`${Weburl}/contact-us`}
                  className="theme btn btn-primary mnw-180"
                >
                  <i className="hicon hicon-email-envelope pe-2"></i>
                  <span>Let's talk now</span>
                </Link>
                <Link
                  to="tel:+971508639421"
                  className="theme btn btn-link link-dark link-hover fw-medium mnw-180"
                >
                  <i className="hicon hicon-telephone pe-2"></i>
                  <span>+971 50 863 9421</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
