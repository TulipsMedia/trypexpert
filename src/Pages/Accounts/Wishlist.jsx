import React from "react";
import { TourList } from "../../Components/TourList/TourList";
// import tourData from "../../JsonData/tourData";
import wishListImg from "../../Images/wishlist.svg";
import Baseurl from "../../Baseurl";
import { Link } from "react-router-dom";

export const Wishlist = () => {
    const Weburl = Baseurl.WebUrl;
  return (
    <>
      {/* <div className="tour-grid pe-lg-4 me-lg-2">
        <div className="row gy-4">
          {tourData.map((data) => (
            <div
              className="col-12 col-lg-4 col-md-6"
              data-aos="fade"
              key={data.id}
            >
              <TourList tourListData={data} />
            </div>
          ))}
        </div>
      </div> */}
      <div className="pe-lg-4 me-lg-2">
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between border-bottom pb-4 mb-4">
              <h2 className="h3 text-body-emphasis mb-0">Make your wishlist</h2>
            </div>
            <div className="text-center py-5">
              <img
                src={wishListImg}
                alt="Wishlist Img"
                width="75px"
                className="img-fluid"
                loading="lazy"
              />
              <p className="my-3">
                Find an activity you like? Click on the to save it here and view
                your wishlist from all your devices.
              </p>
              <Link
                to={`${Weburl}/activities`}
                className="theme btn btn-primary mnw-180"
              >
                <i className="hicon hicon-search-icon pe-2"></i>
                Find to do activities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
