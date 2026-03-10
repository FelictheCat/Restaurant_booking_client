import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>

      <Link to="/restaurants">Restaurants</Link>

      <Link to="/my-bookings">My Bookings</Link>

      <Link to="/my-restaurants">My Restaurants</Link>

      <Link to="/profile">Profile</Link>

      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
