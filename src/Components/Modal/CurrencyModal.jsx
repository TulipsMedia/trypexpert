// Currency Modal Component
import React from "react";

const CurrencyModal = ({
  showCurrModal,
  closeCurrModal,
  onSelectCurrency,
  selectedCurrency,
}) => {
  return (
    showCurrModal && (
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Select your currency</h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeCurrModal}
                aria-label="Open currency modal"
              ></button>
            </div>
            <div className="modal-body">
              <div className="currency_list">
                {[
                  { label: "AED (د.إ)", value: "aed" },
                  { label: "USD ($)", value: "usd" },
                  { label: "INR (₹)", value: "inr" },
                  { label: "EUR (€)", value: "eur" },
                ].map((currency) => (
                  <div
                    key={currency.value}
                    className="currency_list_items d-flex align-items-center justify-content-between pb-4"
                  >
                    <p className="currency_label mb-0">{currency.label}</p>
                    <input
                      type="radio"
                      name="siteCurrency"
                      value={currency.value}
                      className="form-check-input mt-0"
                      onChange={() => onSelectCurrency(currency.value)}
                      checked={selectedCurrency === currency.value}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default CurrencyModal;
