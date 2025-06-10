import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TimeslotToggle } from "./TimeslotToggle";
import Baseurl from "../../Baseurl";

export const TicketAside = ({
  visible,
  ticketType,
  selectedDate,
  initialAdults = 1,
  initialChildren = 0,
  initialTimeslot = null,
}) => {
  const Weburl = Baseurl.WebUrl;
  const navigate = useNavigate();
  const [timeslot, setTimeslot] = useState(initialTimeslot);
  const [adults, setAdults] = useState(initialAdults);
  const [children, setChildren] = useState(initialChildren);

  const ticketPrices = {
    "2_park_ticket": { adult: 475, child: 375 },
    single_park_pass: { adult: 250, child: 200 },
    vip_experience: { adult: 250, child: 200 },
    family_package: { adult: 900, child: 0 },
  };

  const basePrice = ticketPrices["vip_experience"].adult;
  const timeslots = [
    { time: "5:00am", price: basePrice, closes: "11:30pm" },
    { time: "5:30am", price: basePrice + 50, closes: "11:30pm" },
    { time: "6:00am", price: basePrice + 100, closes: "11:30pm" },
    { time: "6:30am", price: basePrice + 150, closes: "11:30pm" },
    { time: "7:00am", price: basePrice + 200, closes: "11:30pm" },
  ];

  const calculateTotal = () => {
    if (!ticketType) return 0;
    if (ticketType === "family_package") {
      return ticketPrices[ticketType].adult;
    }
    if (ticketType === "vip_experience") {
      const timeslotPrice = timeslot
        ? timeslots.find((slot) => slot.time === timeslot)?.price ||
          timeslots[0].price
        : timeslots[0].price;
      const { adult, child: childPrice } = ticketPrices[ticketType];
      return timeslotPrice + (adults - 1) * adult + children * childPrice;
    }
    const { adult, child: childPrice } = ticketPrices[ticketType];
    return adults * adult + children * childPrice;
  };

  const isCheckoutEnabled = () => {
    if (!ticketType) return false;
    if (ticketType === "single_park_pass" || ticketType === "family_package") {
      return true;
    }
    if (ticketType === "vip_experience") {
      return !!selectedDate && !!timeslot;
    }
    return !!selectedDate;
  };

  useEffect(() => {
    setAdults(initialAdults);
    setChildren(initialChildren);
    setTimeslot(initialTimeslot);
  }, [ticketType, initialAdults, initialChildren, initialTimeslot]);

  const handleCheckout = () => {
    let timeslotData = null;
    if (ticketType === "vip_experience") {
      timeslotData = timeslot
        ? timeslots.find((slot) => slot.time === timeslot)
        : timeslots[0];
      if (!timeslotData) {
        timeslotData = timeslots[0];
      }
      if (!timeslot) {
        setTimeslot(timeslotData.time);
      }
    }

    const checkoutState = {
      selectedDate: selectedDate,
      ticketType,
      adults,
      children,
      timeslot: timeslotData ? timeslotData.time : null,
      timeslotPrice: timeslotData ? timeslotData.price : null,
      total: calculateTotal(),
    };

    navigate(`${Weburl}/checkout`, {
      state: checkoutState,
    });
  };

  if (!visible) return null;

  return (
    <aside id="ticket-aside" className="sticky-top sticky-top-120">
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h5 className="fw-bold mb-3">Select your preferences</h5>

          {ticketType === "family_package" ? (
            <>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <strong className="h4">Total</strong>
                <strong className="h4">
                  AED {ticketPrices[ticketType].adult}
                </strong>
              </div>
            </>
          ) : (
            <>
              {ticketType === "vip_experience" && (
                <div id="timeslot-section" className="mb-4">
                  <TimeslotToggle
                    timeslot={timeslot}
                    onTimeslotChange={setTimeslot}
                    selectedDate={selectedDate}
                  />
                </div>
              )}

              {(ticketType === "2_park_ticket" ||
                ticketType === "single_park_pass" ||
                ticketType === "vip_experience") && (
                <>
                  <div
                    id="guest-section"
                    className="bg-white border rounded shadow-sm p-3 mb-4"
                  >
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <i className="text-black hicon-bold hicon hicon-family-with-teens"></i>
                        <strong>Guests</strong>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div>
                        <div className="fw-semibold">Adult 13+</div>
                        <div className="small text-muted">Min: 1 | Max: 20</div>
                      </div>
                      <div className="fw-bold me-3">
                        AED {ticketPrices[ticketType]?.adult || 0}
                      </div>
                      <div className="d-flex align-items-center border rounded">
                        <button
                          className="btn btn-sm px-2"
                          onClick={() => setAdults((a) => Math.max(1, a - 1))}
                          aria-label="Decrease adult"
                        >
                          -
                        </button>
                        <div className="px-2">{adults}</div>
                        <button
                          className="btn btn-sm px-2"
                          onClick={() => setAdults((a) => Math.min(20, a + 1))}
                          aria-label="Increase adult"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="fw-semibold">Child 3-12</div>
                        <div className="small text-muted">Min: 0 | Max: 20</div>
                      </div>
                      <div className="fw-bold me-3">
                        AED {ticketPrices[ticketType]?.child || 0}
                      </div>
                      <div className="d-flex align-items-center border rounded">
                        <button
                          className="btn btn-sm px-2"
                          onClick={() => setChildren((c) => Math.max(0, c - 1))}
                          aria-label="Decrease child"
                        >
                          -
                        </button>
                        <div className="px-2">{children}</div>
                        <button
                          className="btn btn-sm px-2"
                          onClick={() =>
                            setChildren((c) => Math.min(20, c + 1))
                          }
                          aria-label="Increase child"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <strong className="h4">Total</strong>
                    <strong className="h4">AED {calculateTotal()}</strong>
                  </div>
                </>
              )}
            </>
          )}

          <button
            className="btn btn-dark w-100 fw-bold"
            disabled={!isCheckoutEnabled()}
            onClick={handleCheckout}
            aria-label="Checkout"
          >
            Checkout
          </button>
        </div>
      </div>
    </aside>
  );
};
