import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Baseurl from "../../Baseurl";
import { DateCalendarModal } from "./DateCalendarModal";

export const FixedBottomBar = ({
  onOpenCalendar,
  showModal,
  onCloseCalendar,
  selectedDate,
  onDateSelect,
}) => {
  const Weburl = Baseurl.WebUrl;
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const pricingData = {
    "2025-06-07": "₹4.1K",
    "2025-06-08": "₹3.7K",
    "2025-06-09": "₹3.7K",
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    setIsSmallScreen(mediaQuery.matches);
    const handleResize = () => setIsSmallScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

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

  const getDatePrice = (date) => {
    if (!date) return null;
    return pricingData[formatDate(date)] || "₹3.7K";
  };

  if (!isSmallScreen) return null;

  return (
    <>
      <div className="fixed-bottom-bar">
        <div className="content-wrapper">
          <span className="icon-pulse">
            <span>From </span>
            <span>AED 185.80</span>
          </span>
          <button
            className="explore-button"
            onClick={onOpenCalendar}
            aria-label="Check Availability"
          >
            Check Availability
          </button>
        </div>
      </div>
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
