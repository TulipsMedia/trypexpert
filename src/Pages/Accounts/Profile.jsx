import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css"; // Important for styling

export const Profile = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="pe-lg-4 me-lg-2">
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between border-bottom pb-4 mb-4">
            <h2 className="h3 text-body-emphasis mb-0">Your profile</h2>
          </div>
          <form method="post">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="mb-4">
                  <label className="form-label" htmlFor="txtFirstname">
                    First Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-sm"
                    id="txtFirstname"
                    required
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-4">
                  <label className="form-label" htmlFor="txtLastname">
                    Last Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-sm"
                    id="txtLastname"
                    required
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-4">
                  <label className="form-label" htmlFor="txtPhone">
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
                <div className="mb-4">
                  <label className="form-label" htmlFor="txtEmail">
                    Email<span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control shadow-sm"
                    id="txtEmail"
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="mb-4">
                  <label className="form-label" htmlFor="txtAddress">
                    Country of residence<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-sm"
                    id="txtAddress"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="border-top pt-4">
              <button
                type="submit"
                className="theme btn btn-primary mnw-180"
                aria-label="Update profile"
              >
                <i className="hicon hicon-check-valid-state pe-2"></i>
                Update profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
