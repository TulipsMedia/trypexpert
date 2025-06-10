// Currency Button Component
import React from "react";

export const Currency = ({ openCurrModal, selectedCurrency }) => {
  const getCurrShort = (currency) => {
    switch (currency) {
      case "aed":
        return "AED";
      case "usd":
        return "USD";
      case "inr":
        return "INR";
      case "eur":
        return "EUR";
      default:
        return "AED";
    }
  };

  return (
    <button
      className="btn border-0 bg-transprant d-flex align-items-center"
      onClick={openCurrModal}
      aria-label="Open currency modal"
    >
      <i className="hicon hicon-currency-exchange fs-5"></i>{" "}
      <span className="text-pad-hide ps-1">{getCurrShort(selectedCurrency)}</span>
    </button>
  );
};
