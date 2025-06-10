import Baseurl from "../../Baseurl";
import { Link } from "react-router-dom";
import blogsBanner from "../../Images/blogs.webp";
import blogUser from "../../Images/destination/a3.webp";

export const PostBanner = ({ blog }) => {
  const Weburl = Baseurl.WebUrl;

  return (
    <section className="hero" data-aos="fade">
      <div className="hero-bg">
        <img
          src={blogsBanner}
          alt={blog.title}
          className="img-fluid"
          fetchPriority="high"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="bg-content container">
        <div className="p-top-120 p-bottom-120 text-body text-center">
          <h1 className="display-6 hero-title">{blog.title}</h1>
          <div className="fs-5 d-md-inline-flex align-items-md-center hero-desc">
            <div className="d-inline-flex align-items-center me-lg-4 mt-3">
              <img
                src={blogUser}
                alt="Blog User"
                className="rounded-circle me-2"
                loading="eager"
                decoding="async"
              />
              <span>Mobin Uddin</span>
            </div>
            <div className="d-inline-flex align-items-center me-lg-4 mt-lg-3">
              <div className="d-inline-block me-lg-4">
                <i className="hicon hicon-menu-calendar me-1"></i>
                <span>Last Updated: {blog.date}</span>
              </div>
            </div>
          </div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to={`${Weburl}`}>Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to={`${Weburl}/blogs`}>Blogs</Link>
              </li>
              <li className="breadcrumb-item active">Blog Details</li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};
