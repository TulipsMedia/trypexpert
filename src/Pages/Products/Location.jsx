import React from "react";
import trypExpert from "../../Images/logo-dark.svg";

export const Location = () => {
  return (
    <div className="card border-0 shadow-sm p-xl-2 mb-4" data-aos="fade">
      <div className="card-body">
        <div className="border-bottom mb-4 pb-4">
          <h4 className="text-body-emphasis mb-0">Location</h4>
        </div>
        <div className="accordion accordion-flush" id="locationAccordion">
          <div className="accordion-item theme">
            <h2 className="accordion-header" id="headingAddress">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseAddress"
                aria-expanded="true"
                aria-controls="collapseAddress"
              >
                Address
              </button>
            </h2>
            <div
              id="collapseAddress"
              className="accordion-collapse collapse show"
              aria-labelledby="headingAddress"
              data-bs-parent="#locationAccordion"
            >
              <div className="accordion-body">
                <p className="mb-3">MOTIONGATE Dubai</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8160.037254133654!2d55.003127!3d24.921592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f0fa22e45c91d%3A0xe68cb823ca8efc65!2sMotiongate%20Dubai!5e1!3m2!1sen!2sae!4v1749014616475!5m2!1sen!2sae"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Motiongate Location"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="accordion-item theme">
            <h2 className="accordion-header" id="headingProvider">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseProvider"
                aria-expanded="false"
                aria-controls="collapseProvider"
              >
                Provider
              </button>
            </h2>
            <div
              id="collapseProvider"
              className="accordion-collapse collapse"
              aria-labelledby="headingProvider"
              data-bs-parent="#locationAccordion"
            >
              <div className="accordion-body">
                <img
                  src={trypExpert}
                  className="img-fluid"
                  alt="trypExpert"
                  width="170"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
