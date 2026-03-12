import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import "./Sidebar.css";

function Sidebar() {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <h2>Dashboard</h2>

      <Link to="/profile">Profile</Link>

      <Link to="/my-bookings">My Bookings</Link>

      {user?.role === "owner" && (
        <>
          <Link to="/my-restaurants">My Restaurants</Link>
          <Link to="/create-restaurant">Create Restaurant</Link>
          <Link to="/manage-bookings">Manage Bookings</Link>
        </>
      )}

      <button onClick={logoutUser}>Logout</button>
    </div>
  );
}

export default Sidebar;
