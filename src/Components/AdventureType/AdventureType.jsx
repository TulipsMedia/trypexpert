import React from "react";
import Baseurl from "../../Baseurl";
import { Link } from "react-router-dom";

export const AdventureType = ({ advenType }) => {
  const Weburl = Baseurl.WebUrl;
  return (
    <Link
      to={`${Weburl}/activities`}
      className="mini-card card-hover hover-effect shadow-sm rounded"
    >
      <div className="d-flex align-items-center">
        <span className="card-icon">
          <i className={advenType.icon}></i>
        </span>
        <div className="card-content">
          <h3 className="card-title">{advenType.title}</h3>
          <small className="card-desc">{advenType.count}</small>
        </div>
      </div>
    </Link>
  );
};
