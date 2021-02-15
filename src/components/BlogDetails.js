import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );
  const history = useHistory();

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && (
        <div>
          {error}
          <p>
            Need to start the Json Server run: npx json-server --watch
            data/db.json --port 8000"
          </p>
          }
        </div>
      )}
      {blog && (
        <article>
          <img height="350px" src={process.env.PUBLIC_URL + "/" + blog.image} />
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete Blog</button>
        </article>
      )}
    </div>
  );
};
export default BlogDetails;
