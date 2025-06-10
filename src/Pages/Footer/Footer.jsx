import React from "react";
import logo from "../../Images/logo-light.svg";
import footerBg from "../../Images/footer_bg.webp";
import { Link } from "react-router-dom";
import Baseurl from "../../Baseurl";
import { ScrollTop } from "../../Components/LoaderScrollTop/ScrollTop";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const Weburl = Baseurl.WebUrl;
  return (
    <footer
      className="footer p-top-60 p-bottom-60"
      style={{ overflow: "hidden" }}
    >
      <div
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.3, // 👈 Adjust this to your desired transparency
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      ></div>
      <div className="position-relative" style={{ zIndex: 1 }}>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-4 col-md-6">
                <div className="footer-widget">
                  <Link to={`${Weburl}`} className="brand-img">
                    <img
                      className="me-4"
                      src={logo}
                      alt="TrypEspert"
                      width="250px"
                      loading="lazy"
                    />
                  </Link>
                  <p className="brand-desc">
                    Our goal is to deliver seamless, unforgettable travel
                    experiences across Dubai and the Emirates. We are committed
                    to excellence, crafting curated adventures that turn your
                    travel dreams into lasting memories.
                    <Link to={`${Weburl}/about-us`}>[+]</Link>
                  </p>
                </div>
              </div>
              <div className="col-12 col-xl-4 col-md-6">
                <div className="footer-widget">
                  <h2 className="h4 pb-3">Contact Info</h2>
                  <div className="contact-info">
                    <p className="d-flex gap-2">
                      <span>
                        <i className="hicon hicon-flights-pin fs-5 theme-white"></i>
                      </span>
                      <span>
                        The Meydan Hotel, Grandstand, 6th floor, Meydan Road,
                        Nad Al Sheba, Dubai, U.A.E
                      </span>
                    </p>
                    <p className="d-flex gap-2">
                      <Link to="tel:+971 50 863 9421">
                        <span>
                          <i className="hicon hicon-telephone fs-5 theme-white pe-2"></i>
                        </span>
                        +971 50 863 9421
                      </Link>
                    </p>
                    <p className="d-flex gap-2">
                      <Link to="mailto:contact@trypexpert.com" target="_blank">
                        <span>
                          <i className="hicon hicon-email-envelope fs-5 theme-white pe-2"></i>
                        </span>
                        contact@trypexpert.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-xl-2 col-md-6">
                <div className="footer-widget">
                  <h2 className="h4 pb-3">Useful Links</h2>
                  <ul className="footer-link">
                    <li className="link-item">
                      <Link to={`${Weburl}/about-us`}>
                        <i className="hicon hicon-flights-one-ways theme-white pe-2"></i>
                        About us
                      </Link>
                    </li>
                    <li className="link-item">
                      <Link to={`${Weburl}/destinations`}>
                        <i className="hicon hicon-flights-one-ways theme-white pe-2"></i>
                        Destinations
                      </Link>
                    </li>
                    <li className="link-item">
                      <Link to={`${Weburl}/contact-us`}>
                        <i className="hicon hicon-flights-one-ways theme-white pe-2"></i>
                        Contact us
                      </Link>
                    </li>
                    <li className="link-item">
                      <Link to={`${Weburl}/blogs`}>
                        <i className="hicon hicon-flights-one-ways theme-white pe-2"></i>
                        Blogs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-xl-2 col-md-6">
                <div className="footer-widget">
                  <h2 className="h4 pb-3">Follow Us</h2>
                  <ul className="social-list">
                    <li className="social-item">
                      <Link to="https://www.facebook.com/" target="_blank">
                        <span className="d-flex align-items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                          </svg>
                          Facebook
                        </span>
                      </Link>
                    </li>
                    <li className="social-item">
                      <Link to="https://twitter.com/" target="_blank">
                        <span className="d-flex align-items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="none"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                          </svg>
                          X (Twitter)
                        </span>
                      </Link>
                    </li>
                    <li className="social-item">
                      <Link to="https://www.instagram.com/" target="_blank">
                        <span className="d-flex align-items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            />
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                          </svg>
                          Instagram
                        </span>
                      </Link>
                    </li>
                    <li className="social-item">
                      <Link to="https://www.linkedin.com/" target="_blank">
                        <span className="d-flex align-items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-12h4v2a4 4 0 014-2z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                          LinkedIn
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <p className="mb-lg-0">
                  © {currentYear} TrypExpert LLC. All rights reserved.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <div className="text-start text-md-end">
                  <ul className="list-inline mb-lg-0">
                    <li className="list-inline-item">
                      <Link to={`${Weburl}/privacy-policy`}>
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      | &nbsp;
                      <Link to={`${Weburl}/cookie-policy`}>Cookie Policy</Link>
                    </li>
                    <li className="list-inline-item">
                      | &nbsp;
                      <Link to={`${Weburl}/terms-of-use`}>Terms of Use</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollTop />
    </footer>
  );
};
