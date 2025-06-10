import React from "react";

export const AdventureFilter = ({
  advenType,
  selectedAdventureIds,
  toggleAdventure,
}) => {
  const isActive = selectedAdventureIds.includes(advenType.id);

  return (
    <div
      className={`filter mini-card card-hover hover-effect shadow-sm rounded text-center h-100 ${
        isActive ? "active" : ""
      }`}
      onClick={() => toggleAdventure(advenType.id)}
      role="button"
    >
      <div className="d-flex flex-column gap-2 align-items-center">
        <span className="card-icon">
          <i className={advenType.icon}></i>
        </span>
        <div className="card-content">
          <h3 className="card-title">{advenType.title}</h3>
        </div>
      </div>
    </div>
  );
};
