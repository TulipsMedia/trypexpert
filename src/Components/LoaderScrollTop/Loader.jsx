import React from "react";
import loaderImg from "../../../src/Images/fav.svg";

export const Loader = () => {
  return (
    <div id="preloader">
      <div id="loader" className="loader">
        <div className="loader-container">
          <div className="loader-icon">
            <img
              src={loaderImg}
              alt="Preloader"
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
