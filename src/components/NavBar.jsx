import { Link } from "react-router-dom";
import { useContext } from "react";
import "./Navbar.css";


import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>

      <Link to="/restaurants">Restaurants</Link>

      <Link to="/about">About</Link>

      {!isLoggedIn && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}

      {isLoggedIn && (
        <>
          {/* <Link to="/profile">Profile</Link>
          <Link to="/my-bookings">My Bookings</Link> */}

          <button onClick={logoutUser}>Logout</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
