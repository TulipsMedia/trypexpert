import React, { useState } from "react";
import bookingData from "../../JsonData/BookingData";
import Baseurl from "../../Baseurl";
import { Link, useNavigate } from "react-router-dom";
import bookingImg from "../../Images/booking.svg";

export const Booking = () => {
  const Weburl = Baseurl.WebUrl;
  const navigate = useNavigate();
  const [visibleRows, setVisibleRows] = useState(10);
  const [statusFilter, setStatusFilter] = useState("All status");

  // Convert object to array, apply status filter, and sort by date descending
  const bookings = Object.values(bookingData)
    .filter(
      (booking) =>
        statusFilter === "All status" || booking.status === statusFilter
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const handleLoadMore = () => {
    setVisibleRows((prev) => prev + 10);
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
    setVisibleRows(10); // Reset pagination on filter change
  };

  const handleDetailsClick = (bookingCode) => {
    navigate(
      `${Weburl}/my-account?section=booking-details&bookingId=${bookingCode}`
    );
  };

  return (
    <div className="pe-lg-4 me-lg-2">
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between border-bottom mb-4">
            <h2 className="h3 ff-primary mb-4 text-body-emphasis me-auto">
              {bookings.length} Bookings
            </h2>
            {bookings.length > 0 && (
              <div className="mb-4">
                <select
                  className="form-select shadow-sm dropdown-select mnw-150"
                  aria-label="Booking status"
                  value={statusFilter}
                  onChange={handleStatusChange}
                >
                  <option value="All status">All Bookings</option>
                  <option value="Upcoming">Upcoming</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            )}
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
                {statusFilter === "All status"
                  ? "No bookings available. Start your adventure by booking a tour today!"
                  : `No bookings found for "${statusFilter}" status.`}
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
                        <strong>Booking Date</strong>
                      </th>
                      <th scope="col">
                        <strong>Status</strong>
                      </th>
                      <th scope="col">
                        <strong>Action</strong>
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
                          <small className="text-nowrap">{booking.date}</small>
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
