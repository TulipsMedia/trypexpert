import React from "react";

export const Clients = ({ name, src }) => {
  return (
    <div className="clients hover-effect">
      <img
        src={src}
        alt={name}
        className="img-fluid"
        fetchPriority="high"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};
