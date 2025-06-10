import React from "react";

export const Settings = () => {
  return (
    <div className="pe-lg-4 me-lg-2">
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between border-bottom pb-4 mb-4">
            <h2 className="h3 text-body-emphasis mb-0">Change Password</h2>
          </div>
          <form method="post">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="mb-4">
                  <label className="form-label" htmlFor="txtOldPassword">
                    Old Password<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-sm"
                    id="txtOldPassword"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="mb-4">
                  <label className="form-label" htmlFor="txtNewPassword">
                    New Password<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-sm"
                    id="txtNewPassword"
                    required
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-4">
                  <label className="form-label" htmlFor="txtRetypeNewPassword">
                    Retype New Password<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-sm"
                    id="txtRetypeNewPassword"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="border-top pt-4">
              <button
                type="submit"
                className="theme btn btn-primary mnw-180"
                aria-label="Update password"
              >
                <i className="hicon hicon-check-valid-state pe-2"></i>
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
