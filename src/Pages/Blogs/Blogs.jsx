import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { SubBanner } from "../../Components/Banners/SubBanner";
import { PostList } from "../../Components/PostList/PostList";
import blogsBanner from "../../Images/blogs.webp";
import { AllPosts } from "./AllPosts";

export const Blogs = () => {
  const [visiblePosts, setVisiblePosts] = useState(8);

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 8);
  };

  const postsToShow = AllPosts.slice(0, visiblePosts);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Travel Blogs | Trypexpert – Tips, Stories & Destination Guides
          </title>
          <meta
            name="description"
            content="Explore expert travel blogs from Trypexpert covering top UAE destinations, insider tips, cultural highlights, and adventure ideas to inspire your next trip."
          />
        </Helmet>
      </HelmetProvider>
      <SubBanner title="Blogs" breadcrumb="Blogs" image={blogsBanner} />
      <section
        className="p-top-60 p-bottom-60 bg-gray-gradient"
        data-aos="fade"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="block-title">
                <small className="sub-title">Travel Insights & Tips</small>
                <h2 className="h1 title lh-sm">Explore Our Latest Blogs</h2>
              </div>
            </div>
          </div>
          <div className="row gy-3 pt-4 ">
            {postsToShow.map((post) => (
              <div className="col-lg-4 col-md-6 mb-4" key={post.id}>
                <PostList postList={post} />
              </div>
            ))}
          </div>
          {visiblePosts < AllPosts.length && (
            <div className="text-center pt-3">
              <hr />
              <button
                className="theme btn btn-primary px-4"
                onClick={loadMorePosts}
                aria-label="Load more"
              >
                <i className="hicon hicon-refresh pe-2"></i> Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
