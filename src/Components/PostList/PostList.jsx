import React from "react";
import { Link } from "react-router-dom";
import Baseurl from "../../Baseurl";

export const PostList = ({ postList }) => {
  const Weburl = Baseurl.WebUrl;

  return (
    <>
      <div className="post shadow-sm rounded hover-effect">
        <div className="post-img">
          <Link to={`${Weburl}/blogs/${postList.slug}`}>
            <figure className="image-hover image-hover-overlay rounded">
              <img
                src={postList.image}
                alt={postList.title}
                className="img-fluid"
                loading="lazy"
                decoding="async"
              />
              <i className="hicon hicon-plus-thin image-hover-icon"></i>
            </figure>
          </Link>
        </div>
        <div className="post-content">
          <h3 className="post-title">
            <Link to={`${Weburl}/blogs/${postList.slug}`}>
              {postList.title}
            </Link>
          </h3>
          <div className="post-link">
            <div className="post-ext">
              <div className="post-date">
                <i className="hicon hicon-menu-calendar pe-2"></i>
                <span>{postList.date}</span>
              </div>
            </div>
            <Link
              to={`${Weburl}/blogs/${postList.slug}`}
              className="circle-icon circle-icon-link"
            >
              <i className="hicon hicon-flights-one-ways fs-4"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
