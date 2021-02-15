import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Sorry that page does not Exist</h2>
      <Link to="/">Go back to the Homepage</Link>
    </div>
  );
};

export default NotFound;
