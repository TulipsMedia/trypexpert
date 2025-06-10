import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TicketCard from "./TicketCard";
import { TicketAside } from "./TicketAside";
import { Breadcrumb } from "./Breadcrumb";
import { DateToggle } from "./DateToggle";

export const BookingInfo = () => {
  const location = useLocation();
  const [showAside, setShowAside] = useState(true);
  const [selectedTicketType, setSelectedTicketType] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [initialAdults, setInitialAdults] = useState(1);
  const [initialChildren, setInitialChildren] = useState(0);
  const [initialTimeslot, setInitialTimeslot] = useState(null);

  useEffect(() => {
    const { selectedDate, ticketType, adults, children, timeslot } =
      location.state || {};

    if (selectedDate) {
      const parsedDate = new Date(selectedDate);
      parsedDate.setHours(0, 0, 0, 0);
      setSelectedDate(parsedDate);
    }
    if (ticketType) {
      setSelectedTicketType(ticketType);
    }
    if (adults) {
      setInitialAdults(adults);
    }
    if (children) {
      setInitialChildren(children);
    }
    if (timeslot) {
      setInitialTimeslot(timeslot);
    }
  }, [location.state]);

  const handleOpenCalendar = () => setShowModal(true);
  const handleCloseCalendar = () => setShowModal(false);

  const handleDateChange = (date) => {
    const normalizedDate = new Date(date);
    normalizedDate.setHours(0, 0, 0, 0);
    setSelectedDate(normalizedDate);
  };

  const handleTicketTypeChange = (type) => {
    if (selectedTicketType !== type) {
      setInitialAdults(1);
      setInitialChildren(0);
      setInitialTimeslot(null);
    }
    setSelectedTicketType(type);
    setShowAside(true);
    setTimeout(() => {
      const ticketAside = document.getElementById("ticket-aside");
      if (ticketAside) {
        const offsetTop =
          ticketAside.getBoundingClientRect().top + window.pageYOffset;
        const headerHeight = 85; // Sticky header height in pixels
        window.scrollTo({
          top: offsetTop - headerHeight,
          behavior: "smooth",
        });
      } else {
        console.log("TicketAside not found");
      }
    }, 300);
  };

  return (
    <section className="p-top-50 p-bottom-90 bg-gray-gradient">
      <Breadcrumb />
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <DateToggle
              date={selectedDate}
              onDateChange={handleDateChange}
              showModal={showModal}
              onOpenCalendar={handleOpenCalendar}
              onCloseCalendar={handleCloseCalendar}
            />
            <TicketCard
              onSelect={handleTicketTypeChange}
              selectedType={selectedTicketType}
            />
          </div>
          <div className="col-lg-4">
            <TicketAside
              visible={showAside}
              ticketType={selectedTicketType}
              selectedDate={selectedDate}
              initialAdults={initialAdults}
              initialChildren={initialChildren}
              initialTimeslot={initialTimeslot}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
