import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import visaImg from "../../Images/visa.webp";
import masterImg from "../../Images/master-card.webp";
import gpayImg from "../../Images/gpay.webp";
import apayImg from "../../Images/apple-pay.webp";
import americanImg from "../../Images/american-express.webp";
import unionImg from "../../Images/union-pay.webp";
import Baseurl from "../../Baseurl";
import { Link } from "react-router-dom";

// Assuming Baseurl.WebUrl is a string like "https://example.com"
const Weburl = Baseurl.WebUrl;

const CheckoutForm = () => {
  const [phone, setPhone] = useState("");
  const [showRequest, setShowRequest] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoError, setPromoError] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const validPromoCode = "SAVE10";

  const handlePromoApply = () => {
    if (promoCode.trim().toUpperCase() === validPromoCode) {
      setPromoError("");
      setPromoApplied(true);
    } else {
      setPromoError("Invalid promo code");
      setPromoApplied(false);
    }
  };

  // Prevent form submission for now since payment logic is removed
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add further logic here (e.g., send data to backend)
  };

  return (
    <div className="card border-0 shadow-sm" data-aos="fade">
      <div className="card-body">
        <div className="alert alert-light" role="alert">
          <i className="hicon hicon-mmb-account fs-5 pe-2"></i>
          <Link to={`${Weburl}/register`}>Create an account</Link> or{" "}
          <Link to={`${Weburl}/login`}>Log in</Link> for faster checkout
        </div>
        <p className="h3 fw-normal mb-4">(OR) continue as a Guest</p>
        <form method="post" onSubmit={handleSubmit}>
          <div className="border-bottom pb-4 mb-4">
            <h3 className="h4 mb-4">Booking Details</h3>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <div className="mb-2">
                  <label className="form-label">
                    First Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-sm"
                    required
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-2">
                  <label className="form-label">
                    Last Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-sm"
                    required
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-2">
                  <label className="form-label">
                    Phone<span className="text-danger">*</span>
                  </label>
                  <PhoneInput
                    country={"ae"}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    inputProps={{
                      name: "phone",
                      required: true,
                      className: "form-control shadow-sm",
                      id: "txtPhone",
                    }}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-2">
                  <label className="form-label">
                    Email<span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control shadow-sm"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 form-group">
                <label className="form-label">Apply Discount</label>
                <div className="input-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Promo Code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <button
                    className="theme btn btn-primary"
                    type="button"
                    onClick={handlePromoApply}
                    aria-label="Apply coupon"
                  >
                    Apply
                  </button>
                </div>
                {promoError && (
                  <div className="text-danger small">{promoError}</div>
                )}
                {promoApplied && (
                  <div className="text-success small">Promo code applied!</div>
                )}
              </div>

              <div className="col-lg-6 col-md-6 form-group align-self-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="checkout-check"
                  checked={showRequest}
                  onChange={(e) => setShowRequest(e.target.checked)}
                />
                <label
                  className="form-check-label ps-2"
                  htmlFor="checkout-check"
                >
                  Add special requests
                </label>
              </div>

              {showRequest && (
                <div className="col-12 col-md-12">
                  <div className="mb-2">
                    <label className="form-label">
                      Special Request
                      <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control shadow-sm"
                      placeholder="Let us know if you have any special requests (e.g. dietary, accessibility, etc.)"
                      required
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="border-bottom pb-2 mb-4">
            <h3 className="h4 mb-4">Payment</h3>
            <p>Payment options will be displayed here.</p>
          </div>

          <div className="border-bottom pb-2 mt-4">
            <button
              type="submit"
              className="theme btn btn-primary mb-3"
              aria-label="Booking confirmation"
            >
              <i className="hicon hicon-bold hicon-pay-on-checkin pe-2"></i>
              Book and Pay
            </button>
          </div>
          <div className="mt-4">
            <h3 className="h4 mb-4">Payment Methods</h3>
            <div className="d-flex">
              <img
                src={visaImg}
                alt="Visa"
                className="img-fluid"
                width="50px"
                loading="lazy"
              />
              <img
                src={masterImg}
                alt="Master Card"
                className="img-fluid"
                width="50px"
                loading="lazy"
              />
              <img
                src={gpayImg}
                alt="Gpay"
                className="img-fluid"
                width="50px"
                loading="lazy"
              />
              <img
                src={apayImg}
                alt="Apple Pay"
                className="img-fluid"
                width="50px"
                loading="lazy"
              />
              <img
                src={americanImg}
                alt="American Express"
                className="img-fluid"
                width="50px"
                loading="lazy"
              />
              <img
                src={unionImg}
                alt="Union Pay"
                className="img-fluid"
                width="50px"
                loading="lazy"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
