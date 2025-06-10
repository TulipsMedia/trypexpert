import React, { useState } from "react";
import { Link } from "react-router-dom";
import Baseurl from "../../Baseurl";
import SearchInput from "../Search/SearchInput";
import LocationModal from "../Modal/LocationModal";

export const ProductBanner = ({ title, image }) => {
  const [showModal, setShowModal] = useState(false);
  const Weburl = Baseurl.WebUrl;
  return (
    <>
      <section className="hero" data-aos="fade">
        <div className="hero-bg">
          <img
            src={image}
            alt={title}
            className="img-fluid"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="bg-content container">
          <div className="p-top-200 p-bottom-200 text-body text-center">
            <h1 className="display-3 hero-title">
              {title}{" "}
              <i
                className="hicon hicon-flights-pin me-2 fs-1"
                onClick={() => setShowModal(true)}
                style={{ cursor: "pointer" }}
              ></i>
            </h1>
            <div className="row pt-3">
              <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                <SearchInput city={title} />
              </div>
            </div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={`${Weburl}`}>Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to={`${Weburl}/destinations`}>Destinations</Link>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <LocationModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
      />
    </>
  );
};
