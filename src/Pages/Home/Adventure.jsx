import React from "react";
import { AdventureType } from "../../Components/AdventureType/AdventureType";
import { Link } from "react-router-dom";
import Baseurl from "../../Baseurl";
import adventureData from "../../JsonData/adventureData";
export const Adventure = () => {
  const Weburl = Baseurl.WebUrl;
  return (
    <section className="p-top-60 p-bottom-60 bg-gray-gradient" data-aos="fade">
      <div className="container">
        <div className="d-xl-flex align-items-xl-center pb-4">
          <div className="block-title me-auto">
            <small className="sub-title">Tour categories</small>
            <h2 className="h1 title">Adventure types</h2>
          </div>
          <div className="fw-normal text-secondary mt-3">
            You need{" "}
            <Link to={`${Weburl}/contact-us`}>
              <abbr title="Go to contact page" className="fw-semibold">
                advice
              </abbr>
            </Link>
            ?
          </div>
        </div>

        <div className="row g-3">
          {adventureData.map((data) => (
            <div className="col-12 col-xxl-3 col-xl-4 col-md-6" key={data.id}>
              <AdventureType advenType={data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
