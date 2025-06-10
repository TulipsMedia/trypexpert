import React from "react";

export const AboutProduct = () => {
  return (
    <div className="card border-0 shadow-sm p-xl-2 mb-4" data-aos="fade">
      <div className="card-body">
        <div className="border-bottom mb-4 pb-4">
          <h4 className="text-body-emphasis mb-0">About</h4>
        </div>
        <div className="accordion accordion-flush" id="aboutAccordion">
          <div className="accordion-item theme">
            <h2 className="accordion-header" id="headingOverview">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOverview"
                aria-expanded="true"
                aria-controls="collapseOverview"
              >
                Overview
              </button>
            </h2>
            <div
              id="collapseOverview"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOverview"
              data-bs-parent="#aboutAccordion"
            >
              <div className="accordion-body">
                <p>
                  Visit MOTIONGATE™ theme park to dive into a world of
                  innovation and creative storytelling. Experience world-class
                  entertainment from three of Hollywood's biggest and most
                  successful motion picture studios - DreamWorks Animation,
                  Columbia Pictures, and Lionsgate.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item theme">
            <h2 className="accordion-header" id="headingHighlights">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseHighlights"
                aria-expanded="false"
                aria-controls="collapseHighlights"
              >
                Highlights
              </button>
            </h2>
            <div
              id="collapseHighlights"
              className="accordion-collapse collapse"
              aria-labelledby="headingHighlights"
              data-bs-parent="#aboutAccordion"
            >
              <div className="accordion-body">
                <ul className="highlight-list checked">
                  <li>
                    Experience the thrill of Hollywood's biggest blockbuster
                    movies at MOTIONGATE™ Dubai.
                  </li>
                  <li>
                    Head towards the Hollywood Theater to watch a high-energy
                    Hip Hop show.
                  </li>
                  <li>
                    Get your adrenaline pumping on thrilling roller coasters and
                    action-packed rides.
                  </li>
                  <li>
                    Enjoy a John Wick-inspired ride that recreates the film's
                    action on a 10-story spin roller coaster.
                  </li>
                  <li>
                    Brave the Now You See Me: High Roller and experience
                    mind-bending misdirection.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item theme">
            <h2 className="accordion-header" id="headingIncluded">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseIncluded"
                aria-expanded="false"
                aria-controls="collapseIncluded"
              >
                What's included in the ticket
              </button>
            </h2>
            <div
              id="collapseIncluded"
              className="accordion-collapse collapse"
              aria-labelledby="headingIncluded"
              data-bs-parent="#aboutAccordion"
            >
              <div className="accordion-body">
                <ul className="highlight-list checked">
                  <li>Unlimited all-day access to MOTIONGATE™ Dubai</li>
                  <li>Access to festive attractions at MOTIONGATE™ Dubai</li>
                  <li>Access to festive attractions at Riverland™ Dubai</li>
                  <li>Free parking at Dubai Parks and Resorts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
