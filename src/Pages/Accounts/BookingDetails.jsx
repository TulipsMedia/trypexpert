import React from "react";
import bookingData from "../../JsonData/BookingData";
import { Link } from "react-router-dom";
import Baseurl from "../../Baseurl";
import bookingImg from "../../Images/booking.svg";

export const BookingDetails = ({ bookingId}) => {
  const Weburl = Baseurl.WebUrl;
  const booking = bookingData[bookingId];

  if (!booking) {
    return (
      <div className="pe-lg-4 me-lg-2">
        <div className="card border-0 shadow-sm">
          <div className="card-body text-center py-5">
            <img
              src={bookingImg}
              alt="Booking Img"
              width="65px"
              className="img-fluid"
              loading="lazy"
            />
            <p className="my-3">Booking not found.</p>
            <Link
              to={`${Weburl}/activities`}
              className="theme btn btn-primary mnw-180"
            >
              <i className="hicon hicon-search-icon pe-2"></i>
              Explore Tours
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pe-lg-4 me-lg-2">
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="border-bottom pb-2 mb-4">
            <div className="d-flex align-items-center">
              <h2 className="h3 ff-primary text-body-emphasis me-auto">
                Booking ID : #{booking.code}
              </h2>
              <Link
                className="text-primary mb-3 fw-bold"
                style={{ textDecoration: "none" }}
              >
                <i className="hicon hicon-bold hicon-download pe-2"></i>
                <span>E-Ticket</span>
              </Link>
            </div>
          </div>
          <div className="border-bottom pb-4 mb-4 lh-lg">
            <div className="row">
              <div className="col-12 col-md-3">
                <span>Book tour:</span>
              </div>
              <div className="col-12 col-md-9">
                <Link to={`${Weburl}/activities`}>
                  <strong>{booking.tour}</strong>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-3">
                <span>Tour date:</span>
              </div>
              <div className="col-12 col-md-9">
                <strong>{booking.tourDate}</strong>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-3">
                <span>Number of guest:</span>
              </div>
              <div className="col-12 col-md-9">
                <strong>{booking.guests}</strong>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-3">
                <span>Total amount:</span>
              </div>
              <div className="col-12 col-md-9">
                <strong>
                  <sup>$</sup>
                  {booking.totalAmount}.00
                </strong>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-3">
                <label className="mnw-115">Other requests:</label>
              </div>
              <div className="col-12 col-md-9">
                <strong>{booking.requests}</strong>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-3">
                <span>Status:</span>
              </div>
              <div className="col-12 col-md-9">
                <span
                  className={`booking-status booking-${booking.status.toLowerCase()}`}
                >
                  {booking.status}
                </span>
              </div>
            </div>
          </div>
          <div className="border-bottom pb-4 mb-4 lh-lg">
            <div className="row">
              <div className="col-12 col-md-3">
                <span>Full Name:</span>
              </div>
              <div className="col-12 col-md-9">
                <strong>{booking.fullName}</strong>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-3">
                <span>Email:</span>
              </div>
              <div className="col-12 col-md-9">
                <strong>{booking.email}</strong>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-3">
                <span>Phone:</span>
              </div>
              <div className="col-12 col-md-9">
                <strong>{booking.phone}</strong>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-3">
                <span>Address:</span>
              </div>
              <div className="col-12 col-md-9">
                <strong>{booking.address}</strong>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-3">
                <span>City:</span>
              </div>
              <div className="col-12 col-md-9">
                <strong>{booking.city}</strong>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-3">
                <span>Country:</span>
              </div>
              <div className="col-12 col-md-9">
                <strong>{booking.country}</strong>
              </div>
            </div>
          </div>
          <em className="mb-3 small d-block">
            <label>Book date:</label>
            <strong> {booking.date}</strong>
          </em>
        </div>
      </div>
    </div>
  );
};
