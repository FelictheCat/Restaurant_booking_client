import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

  return (
    <nav>
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
          <Link to="/profile">Profile</Link>
          <Link to="/my-bookings">My Bookings</Link>

          {user?.role === "owner" && (
            <>
              <Link to="/create-restaurant">Create Restaurant</Link>
              <Link to="/my-restaurants">My Restaurants</Link>
              <Link to="/manage-bookings">Manage Bookings</Link>
            </>
          )}

          <button onClick={logoutUser}>Logout</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
