import React from "react";

const highlightsData = [
  {
    number: "250+",
    description: (
      <>
        Attractive tours <br /> around Trypexpert
      </>
    ),
  },
  {
    number: "1.1M+",
    description: (
      <>
        Clients from <br /> around the world
      </>
    ),
  },
  {
    number: "4.9",
    description: (
      <>
        <span className="star-rate-view star-rate-size-sm">
          <span className="star-value rate-50"></span>
        </span>
        <br />
        <span>On Tripadvisor</span>
      </>
    ),
  },
  {
    number: "98%",
    description: (
      <>
        Our clients <br /> are satisfied
      </>
    ),
  },
];

export const Highlights = () => {
  return (
    <section className="pt-5 pb-4" data-aos="fade">
      <div className="container">
        <ul className="stats-list row g-0">
          {highlightsData.map((item, index) => (
            <li className="col-6 col-lg-3" key={index}>
              <div className="stats-item">
                <h1 className="stats-number">{item.number}</h1>
                <p className="stats-desc">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
