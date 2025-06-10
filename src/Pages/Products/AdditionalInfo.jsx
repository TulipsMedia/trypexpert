import React from "react";

export const AdditionalInfo = () => {
  return (
    <div className="card border-0 shadow-sm p-xl-2 my-4" data-aos="fade">
      <div className="card-body">
        <div className="border-bottom mb-4 pb-4">
          <h4 className="text-body-emphasis mb-0">Additional Information</h4>
        </div>
        <div
          className="accordion theme faq accordion-flush"
          id="additionalInfoAccordion"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingAgeHealth">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseAgeHealth"
                aria-expanded="true"
                aria-controls="collapseAgeHealth"
              >
                Age and Health Restrictions
              </button>
            </h2>
            <div
              id="collapseAgeHealth"
              className="accordion-collapse collapse show"
              aria-labelledby="headingAgeHealth"
              data-bs-parent="#additionalInfoAccordion"
            >
              <div className="accordion-body">
                A visit to The Dubai Parks and Resorts is suitable for people of
                all ages, including pregnant mothers.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingCancellation">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseCancellation"
                aria-expanded="false"
                aria-controls="collapseCancellation"
              >
                Cancellation Policy
              </button>
            </h2>
            <div
              id="collapseCancellation"
              className="accordion-collapse collapse"
              aria-labelledby="headingCancellation"
              data-bs-parent="#additionalInfoAccordion"
            >
              <div className="accordion-body">
                This Ticket is Non Refundable.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingExperience">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExperience"
                aria-expanded="false"
                aria-controls="collapseExperience"
              >
                Your Experience
              </button>
            </h2>
            <div
              id="collapseExperience"
              className="accordion-collapse collapse"
              aria-labelledby="headingExperience"
              data-bs-parent="#additionalInfoAccordion"
            >
              <div className="accordion-body">
                <h6>Explore Dubai's largest Hollywood-inspired theme park</h6>
                <p>
                  Visit MOTIONGATE™ Dubai to discover thrills and exciting fun
                  at every corner. Experience the best of Hollywood at the
                  family-friendly attraction, right from live shows and
                  immersive attractions like Kung Fu Panda: Unstoppable
                  Awesomeness and Now You See Me: High Roller to
                  stomach-dropping rides like The Hunger Games’ Capitol Bullet
                  Train.
                </p>
                <p>
                  Have the time of your life battling by the side of
                  Ghostbusters to save New York, fly with Toothless the dragon,
                  or team up with the Zoosters at Madagascar: Mad Pursuit. Or,
                  you can simply spend hours having fun in the gigantic and
                  air-conditioned Dreamworks zone. Are you a fan of John Wick
                  films? The John Wick: Open Contract ride will let you
                  experience the thrill of Wick's adventure through a 4D track
                  that offers freestyle spins and takes you 10 stories high!
                </p>
                <p>
                  Whether you are an adult, an adolescent, or a kid, you have
                  plenty to do and explore in the park's four themed zones,
                  which are an exciting blend of rides and movies. Moreover, a
                  wide array of kid-friendly eateries are available to sate your
                  hunger pangs. Don't forget to grab yourself some exclusive
                  movie merchandise from an incredible collection.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingWildlife">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseWildlife"
                aria-expanded="false"
                aria-controls="collapseWildlife"
              >
                Explore Primeval Tropical Forests and Wildlife
              </button>
            </h2>
            <div
              id="collapseWildlife"
              className="accordion-collapse collapse"
              aria-labelledby="headingWildlife"
              data-bs-parent="#additionalInfoAccordion"
            >
              <div className="accordion-body">
                Discover the wonders of ancient tropical forests on a guided
                exploration. Trek through lush vegetation, encounter diverse
                wildlife, and learn about the unique ecological systems. This
                immersive experience offers a deep dive into the untouched
                beauty and biodiversity of the region.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
