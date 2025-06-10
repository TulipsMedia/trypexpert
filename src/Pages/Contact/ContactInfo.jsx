import React from "react";

export const ContactInfo = () => {
  return (
    <div className="p-top-90 mb-4">
      <div className="border-bottom pb-4 mb-4">
        <h2 className="me-auto mb-0">Ready to help you!</h2>
      </div>
      <p className="mb-4">
        We're here to help and answer any question you might have.
      </p>
      <div className="row">
        <div className="col-12">
          <div className="mb-3">
            <div className="d-flex align-items-start">
              <i className="hicon hicon-flights-pin text-black fs-4 me-2"></i>
              <span className="ps-2">
                <h5 className="mb-1">Location</h5>
                <p>
                  The Meydan Hotel, Grandstand, 6th floor, Meydan Road, <br />
                  Nad Al Sheba, Dubai, U.A.E
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="mb-3">
            <div className="d-flex align-items-start">
              <i className="hicon hicon-telephone text-black fs-4 me-2"></i>
              <span className="ps-2">
                <h5 className="mb-1">Call</h5>
                <p>+971 50 863 9421</p>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="mb-3">
            <div className="d-flex align-items-start">
              <i className="hicon hicon-email-envelope text-black fs-4 me-2"></i>
              <span className="ps-2">
                <h5 className="mb-1">Email</h5>
                <p>contact@trypexpert.com</p>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="mb-3">
            <div className="d-flex align-items-start">
              <i className="hicon hicon-time-clock text-black fs-4 me-2"></i>
              <span className="ps-2">
                <h5 className="mb-1">Opening Hours</h5>
                <p>Mon-Sat: 11AM - 11PM</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
