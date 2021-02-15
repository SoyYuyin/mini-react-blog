import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Yuyin");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author, image: "default-react.png" };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        ></input>
        <label>Blog body:</label>
        <textarea
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        ></textarea>
        <select onChange={(e) => setAuthor(e.target.value)}>
          <option>Yuyin</option>
          <option>Guest</option>
        </select>
        {isPending ? (
          <button disabled>Adding blog...</button>
        ) : (
          <button>Add Blog</button>
        )}
      </form>
    </div>
  );
};

export default Create;
