import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <div className="blog-list">
        {blogs.map((blog) => (
          <Link to={`/blogs/${blog.id}`} key={blog.id}>
            <div className="blog-preview">
              <img height="200px" src={process.env.PUBLIC_URL + blog.image} />
              <div className="preview-info">
                <h2>{blog.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default BlogList;
