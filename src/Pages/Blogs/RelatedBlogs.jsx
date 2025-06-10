import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { PostList } from "../../Components/PostList/PostList";
import { AllPosts } from "./AllPosts";

export const RelatedBlogs = ({ currentSlug }) => {
  const splideRef = useRef(null);

  const relatedPosts = AllPosts.filter((post) => post.slug !== currentSlug);

  const options = {
    perPage: 3,
    pagination: false,
    gap: "1.5rem",
    speed: 1000,
    type: "loop",
    arrows: false,
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    breakpoints: {
      1400: { perPage: 3 },
      1200: { perPage: 2 },
      768: { perPage: 1 },
    },
  };

  const handlePrev = () => splideRef.current?.splide?.go("<");
  const handleNext = () => splideRef.current?.splide?.go(">");

  return (
    <section className="p-top-60 p-bottom-60 bg-gray-gradient" data-aos="fade">
      <div className="container">
        <div className="d-md-flex justify-content-md-between mt-3">
          <div className="block-title">
            <small className="sub-title">More Reads</small>
            <h2 className="h1 title">Related Blogs</h2>
          </div>
          <div className="splide__arrows splide__arrows__right">
            <button
              className="splide__arrow splide__arrow--prev me-2"
              onClick={handlePrev}
              aria-label="Slide prev"
            >
              <i className="hicon hicon-edge-arrow-left"></i>
            </button>
            <button
              className="splide__arrow splide__arrow--next"
              onClick={handleNext}
              aria-label="Slide next"
            >
              <i className="hicon hicon-edge-arrow-right"></i>
            </button>
          </div>
        </div>

        <Splide options={options} ref={splideRef}>
          {relatedPosts.map((post) => (
            <SplideSlide key={post.id}>
              <PostList postList={post} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};
