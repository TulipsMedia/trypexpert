import React from "react";
import { Link } from "react-router-dom";

export const IconBox = ({ icon, title, desc, isActive }) => {
  return (
    <Link
      to="#"
      className="info-card hover-effect shadow-sm rounded h-100"
    >
      <div className="card-icon">
        <i className={icon}></i>
      </div>
      <h3 className="h4 card-title">{title}</h3>
      <p className="card-desc">{desc}</p>
    </Link>
  );
};
