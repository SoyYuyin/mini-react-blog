import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch(
    "http://localhost:8000/blogs"
  ); // We use here our custom hook useFetch to pull data and destructure it's returned values into data, isPending and error. We are renaming the 'data' with 'blogs' by using ':'

  return (
    <div className="home">
      {error && (
        <div>
          {error}
          <p>You must start the Json Server to emulate the back end, run:</p>
          <p>npx json-server --watch data/db.json --port 8000</p>
        </div>
      )}
      {isPending && <p>Loading...</p>}
      {blogs && <BlogList blogs={blogs} title="All Blog posts" />}
    </div>
  );
};

export default Home;
