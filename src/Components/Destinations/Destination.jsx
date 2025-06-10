import React from "react";
import Baseurl from "../../Baseurl";
import { Link } from "react-router-dom";

export const Destination = ({ destiData }) => {
  const Weburl = Baseurl.WebUrl;
  return (
    <Link
      to={`${Weburl}/destinations/${destiData.slug}`}
      className="destination bottom-overlay hover-effect rounded"
    >
      <figure className="image-hover image-hover-overlay">
        <img
          src={destiData.image}
          alt={destiData.city}
          className="img-fluid"
          decoding="async"
          fetchPriority="high"
        />
        <i className="hicon hicon-plus-thin image-hover-icon"></i>
      </figure>
      <div className="bottom-overlay-content text-center">
        <h3 className="h6 mb-0">{destiData.city}</h3>
        <small>{destiData.tours}</small>
      </div>
    </Link>
  );
};
