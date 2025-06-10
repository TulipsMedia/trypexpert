import React from "react";
import { Link } from "react-router-dom";
import Baseurl from "../../Baseurl";

export const SubBanner = ({ title, breadcrumb, image }) => {
  const Weburl = Baseurl.WebUrl;
  return (
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
        <div className="hero-page-title">
          <h1 className="display-3 hero-title">{title}</h1>
        </div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to={`${Weburl}`}>Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {breadcrumb}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};
