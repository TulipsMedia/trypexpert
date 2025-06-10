import React, { useState } from "react";
import bookingData from "../../JsonData/BookingData";
import { Link, useNavigate } from "react-router-dom";
import Baseurl from "../../Baseurl";
import bookingImg from "../../Images/booking.svg";

export const Dashboard = () => {
  const Weburl = Baseurl.WebUrl;
  const navigate = useNavigate();
  const [visibleRows, setVisibleRows] = useState(10);

  // Get today's date (midnight May 29, 2025, for comparison)
  const today = new Date("2025-05-29");

  // Convert object to array, filter upcoming tours, and sort by tourDate ascending
  const bookings = Object.values(bookingData)
    .filter((booking) => new Date(booking.tourDate) > today)
    .sort((a, b) => new Date(a.tourDate) - new Date(b.tourDate));

  const handleLoadMore = () => {
    setVisibleRows((prev) => prev + 10);
  };

  const handleDetailsClick = (bookingCode) => {
    navigate(
      `${Weburl}/my-account?section=booking-details&bookingId=${bookingCode}`
    );
  };

  const handleSectionClick = (section) => {
    navigate(`${Weburl}/my-account?section=${section}`);
  };

  return (
    <div className="pe-lg-4 me-lg-2">
      <div className="pb-4">
        <div className="row g-3 g-md-4">
          <div className="col-12 col-md-6">
            <Link
              to="#"
              className="mini-card card-hover hover-effect shadow-sm rounded p-4"
              onClick={(e) => {
                e.preventDefault();
                handleSectionClick("booking");
              }}
            >
              <span className="card-icon">
                <i className="icon hicon hicon-bold hicon-menu-calendar"></i>
              </span>
              <div className="card-content">
                <h2 className="card-title">{bookings.length} Bookings</h2>
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-6">
            <Link
              to="#"
              className="mini-card card-hover hover-effect shadow-sm rounded p-4"
              onClick={(e) => {
                e.preventDefault();
                handleSectionClick("wishlist");
              }}
            >
              <span className="card-icon">
                <i className="hicon hicon-bold hicon-menu-favorite"></i>
              </span>
              <div className="card-content">
                <h2 className="card-title">16 Wishlist</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between border-bottom pb-4 mb-4">
            <h2 className="h3 ff-primary mb-0 text-body-emphasis">
              Upcoming Activities
            </h2>
            <Link
              to="#"
              className="d-inline-block fw-medium"
              onClick={(e) => {
                e.preventDefault();
                handleSectionClick("bookings");
              }}
            >
              <span>All Bookings</span>
              <i className="hicon hicon-flights-one-ways ps-1"></i>
            </Link>
          </div>
          {bookings.length === 0 ? (
            <div className="text-center py-5">
              <img
                src={bookingImg}
                alt="Booking Img"
                width="65px"
                className="img-fluid"
                loading="lazy"
              />
              <p className="my-3">
                No upcoming bookings available. Start your adventure by booking
                a tour today!
              </p>
              <Link
                to={`${Weburl}/activities`}
                className="theme btn btn-primary mnw-180"
              >
                <i className="hicon hicon-search-icon pe-2"></i>
                Explore Tours
              </Link>
            </div>
          ) : (
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead className="text-center">
                    <tr className="table-light">
                      <th scope="col">
                        <strong>S No</strong>
                      </th>
                      <th scope="col">
                        <strong>Tour</strong>
                      </th>
                      <th scope="col">
                        <strong>Amount</strong>
                      </th>
                      <th scope="col">
                        <strong>Tour Date</strong>
                      </th>
                      <th scope="col">
                        <strong>Status</strong>
                      </th>
                      <th scope="col">
                        <strong>Details</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.slice(0, visibleRows).map((booking, index) => (
                      <tr key={booking.code}>
                        <td className="text-center">
                          <span>{index + 1}</span>
                        </td>
                        <td className="text-nowrap">
                          <div className="d-flex flex-column">
                            <Link
                              to="#"
                              className="link-dark link-hover"
                              onClick={(e) => {
                                e.preventDefault();
                                handleDetailsClick(booking.code);
                              }}
                            >
                              <strong>{booking.tour}</strong>
                            </Link>
                            <small className="text-nowrap d-block">
                              code:#{booking.code}
                            </small>
                          </div>
                        </td>
                        <td className="text-center">
                          <strong>
                            <sup>$</sup>
                            {booking.amount.toFixed(2)}
                          </strong>
                        </td>
                        <td className="text-center">
                          <small className="text-nowrap">
                            {booking.tourDate}
                          </small>
                        </td>
                        <td className="text-center">
                          <span
                            className={`booking-status booking-${booking.status.toLowerCase()}`}
                          >
                            {booking.status}
                          </span>
                        </td>
                        <td className="text-center">
                          <Link
                            to="#"
                            className="circle-icon circle-icon-link circle-icon-sm"
                            title="Detail booking"
                            onClick={(e) => {
                              e.preventDefault();
                              handleDetailsClick(booking.code);
                            }}
                          >
                            <i className="hicon hicon-flights-one-ways"></i>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {visibleRows < bookings.length && (
                <div className="text-center pt-2">
                  <Link
                    to="#"
                    className="fw-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLoadMore();
                    }}
                  >
                    <i className="hicon hicon-bold hicon-refresh pe-2"></i>
                    <span>Load More</span>
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
