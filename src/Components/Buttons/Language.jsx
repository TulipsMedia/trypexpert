import React from "react";

export const Language = ({ openLangModal, selectedLang }) => {
  const getLangShort = (lang) => {
    switch (lang) {
      case "tamil":
        return "TA";
      case "espanol":
        return "ES";
      default:
        return "EN";
    }
  };

  return (
    <button
      className="btn border-0 bg-transprant d-flex align-items-center"
      onClick={openLangModal}
      aria-label="Open Language modal"
    >
      <i className="hicon hicon-global fs-5"></i>{" "}
      <span className="text-pad-hide ps-1">{getLangShort(selectedLang)}</span>
    </button>
  );
};
