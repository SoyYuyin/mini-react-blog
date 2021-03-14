import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Mini React Blog</h1>
      <div className="links">
        <Link to={'/'}>Home</Link>
        <Link to={'/create'}>Create</Link>
        {/* <a href="/">Home</a>
        <a href="/create">New Blog</a> */}
      </div>
    </nav>
  );
};

export default Navbar;
