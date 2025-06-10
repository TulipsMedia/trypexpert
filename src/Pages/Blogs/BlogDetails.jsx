import { useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
// your blog data (eventually replace with API)
import { AllPosts } from "./AllPosts";
import { PostBanner } from "../../Components/Banners/PostBanner";
import { RelatedBlogs } from "./RelatedBlogs";

export const BlogDetails = () => {
  const { slug } = useParams();
  const blog = AllPosts.find((post) => post.slug === slug);

  if (!blog) return <p>Blog not found</p>;

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{blog.title} | Trypexpert Blogs</title>
          <meta
            name="description"
            content={`Read about ${blog.title}. Expert travel tips and destination info from Trypexpert.`}
          />
        </Helmet>
      </HelmetProvider>

      <PostBanner blog={blog} />

      <section className="p-top-60 p-bottom-60 bg-gray-gradient">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="pb-4">{blog.title}</h1>
              <figure className="figure w-100">
                <img
                  src={blog.image}
                  className="w-100 rounded"
                  alt={blog.title}
                  loading="lazy"
                />
              </figure>
              <div className="post-content pt-3">
                <p>
                  {/* You can replace this with dynamic content later */}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedBlogs currentSlug={blog.slug} />
    </>
  );
};
