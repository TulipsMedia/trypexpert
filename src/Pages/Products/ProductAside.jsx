import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Baseurl from "../../Baseurl";
import { DateCalendarModal } from "./DateCalendarModal";

export const ProductAside = ({
  showModal,
  onOpenCalendar,
  onCloseCalendar,
  selectedDate,
  onDateSelect,
}) => {
  const Weburl = Baseurl.WebUrl;
  const navigate = useNavigate();
  const [selectedPrice, setSelectedPrice] = useState(null);

  const pricingData = {
    "2025-06-07": "₹4.1K",
    "2025-06-08": "₹3.7K",
    "2025-06-09": "₹3.7K",
  };

  useEffect(() => {
    if (selectedDate) {
      const normalizedDate = new Date(selectedDate);
      normalizedDate.setHours(0, 0, 0, 0);
      const price = getDatePrice(normalizedDate);
      setSelectedPrice(price);
      navigate(`${Weburl}/activities/booking-info`, {
        state: {
          selectedDate: normalizedDate,
          selectedPrice: price,
        },
      });
    }
  }, [selectedDate, navigate, Weburl]);

  const formatDate = (date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d.toISOString().split("T")[0];
  };

  const formatDisplayDate = (dateString) => {
    const d = new Date(dateString);
    d.setHours(0, 0, 0, 0);
    return d.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getDatePrice = (date) => {
    if (!date) return null;
    return pricingData[formatDate(date)] || "₹3.7K";
  };

  return (
    <>
      <aside
        className="sticky-top sticky-top-120 ps-xl-4 ms-xl-1 ps-xxl-0 ms-xxl-0"
        data-aos="fade"
      >
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <div className="border-bottom pb-4 mb-4">
              <span>From:</span>
              <strong className="fs-3 fw-semibold">
                <sup>$</sup>185.80
              </strong>{" "}
              <span className="text-uppercase text-secondary">
                <sup>$</sup>
                <del>230.00</del>
              </span>
            </div>
            <div className="border-bottom pb-4 mb-4">
              <div className="mb-3">
                <label className="form-label">Select Date</label>
                <div
                  className="form-control cursor-pointer d-flex justify-content-between align-items-center"
                  onClick={onOpenCalendar}
                >
                  <span className={selectedDate ? "text-dark" : "text-muted"}>
                    {selectedDate
                      ? formatDisplayDate(selectedDate)
                      : "Check Availability"}
                  </span>
                  <i className="hicon hicon-calendar"></i>
                </div>
                {selectedDate && selectedPrice && (
                  <div className="mt-2">
                    <small className="text-success fw-medium">
                      Price: {selectedPrice}
                    </small>
                  </div>
                )}
              </div>
              <button
                className={`theme btn w-100 fw-medium ${
                  selectedDate ? "btn-primary" : "btn-secondary"
                }`}
                disabled={!selectedDate}
                onClick={() =>
                  navigate(`${Weburl}/activities/booking-info`, {
                    state: {
                      selectedDate,
                      selectedPrice,
                    },
                  })
                }
                aria-label="Check availability"
              >
                <i className="hicon hicon-mmb-my-booking hicon-md me-2"></i>
                Check Availability
              </button>
            </div>
            <div className="mt-4 fw-normal">
              <h3 className="h4">You have questions?</h3>
              <div className="row g-3">
                <div className="col-12">
                  <Link
                    to="mailto:contact@trypexpert.com"
                    className="link-dark link-hover"
                  >
                    <i className="hicon hicon-bold hicon-email-envelope me-2"></i>
                    contact@trypexpert.com
                  </Link>
                </div>
                <div className="col-12">
                  <Link to="tel:+971508639421" className="link-dark link-hover">
                    <i className="hicon hicon-bold hicon-telephone me-2"></i>
                    +971 50 863 9421
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-0 shadow-sm mt-4">
          <div className="card-body">
            <div className="border-bottom mb-4 pb-3">
              <h4 className="text-body-emphasis mb-2">Why Trypexpert?</h4>
            </div>
            <ul className="highlight-list">
              <li>Trusted platform used by 100K+ people, each month</li>
              <li>Get the lowest prices and last-minute availability</li>
              <li>Discover and connect with 10,000+ experiences</li>
              <li>Browse verified reviews and professional photographs</li>
              <li>Have a question? Live chat with our experts anytime</li>
            </ul>
          </div>
        </div>
      </aside>
      <DateCalendarModal
        showModal={showModal}
        onClose={onCloseCalendar}
        onDateSelect={onDateSelect}
        selectedDate={selectedDate}
        pricingData={pricingData}
      />
    </>
  );
};
