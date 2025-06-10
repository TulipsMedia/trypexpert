import React from "react";
import { Link } from "react-router-dom";
import Baseurl from "../Baseurl";

export const NotFound = () => {
  const Weburl = Baseurl.WebUrl;
  return (
    <section className="py-5 my-5" data-aos="fade">
      <div className="d-flex align-items-center text-center py-5 my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-8 col-lg-10">
              <div className="block-title">
                <h1 className="display-2 title">Error 404</h1>
              </div>
              <h2>Oops! Page Not Be Found</h2>
              <div className="text-secondary">
                <p>
                  Sorry but the page you are looking for does not exist, have
                  been removed, name changed or is temporarily unavailable
                </p>
              </div>
              <Link to={`${Weburl}`} className="fw-medium theme-black">
                <span>Homepage</span>
                <i className="hicon hicon-thin-circle-arrow-left fsm-5 ps-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
