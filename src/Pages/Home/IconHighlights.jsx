import React from "react";
import { IconBox } from "../../Components/IconBox/IconBox";

const iconBoxData = [
  {
    icon: "hicon hicon-mountain-view",
    title: "Explore Possibilities",
    desc: "With close to half a million attractions and more, endless joy awaits you.",
  },
  {
    icon: "hicon hicon-family-special-deal",
    title: "Enjoy deals & delights",
    desc: "Exceptional activities. Great prices. Perfect for your next adventure.",
  },
  {
    icon: "hicon hicon-easy-integration",
    title: "Exploring made easy",
    desc: "Book last minute, skip the lines, and enjoy free cancellation for stress-free exploring.",
  },
  {
    icon: "hicon hicon-tours",
    title: "Travel you can trust",
    desc: "Check reviews and enjoy reliable customer support. We're here for you at every step.",
  },
];

export const IconHilights = () => {
  return (
    <section className="p-top-60 p-bottom-60 bg-gray-gradient" data-aos="fade">
      <div className="container">
        <div className="row g-3 g-xl-4">
          <div className="col-12">
            <div className="block-title text-center pb-4">
              <small className="sub-title card-title">Flexible tours</small>
              <h2 className="h1 title card-title lh-xs">Why Trypexpert?</h2>
            </div>
          </div>

          {iconBoxData.map((item, index) => (
            <div className="col-12 col-xl-3 col-md-6" key={index}>
              <IconBox
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                isActive={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
