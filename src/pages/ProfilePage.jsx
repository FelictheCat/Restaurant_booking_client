import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./ProfilePage.css";

import { getMyBookings } from "../services/booking.service";
import { getMyRestaurants } from "../services/restaurant.service";

import BookingCard from "../components/BookingCard";
import RestaurantCard from "../components/RestaurantCard";

function ProfilePage() {
  const { user } = useContext(AuthContext);

  const [bookings, setBookings] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    getMyBookings(token)
      .then((res) => {
        setBookings(res.data);
      })
      .catch((err) => console.log(err));

    getMyRestaurants(token)
      .then((res) => {
        setRestaurants(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

return (
  <div className="profile-layout">

    {/* LEFT SIDE */}
    <div className="profile-main">

      <h1>My Bookings</h1>

      <div className="booking-grid">
        {bookings.map((booking) => (
          <BookingCard key={booking._id} booking={booking} />
        ))}
      </div>

      {user?.role === "owner" && (
        <>
          <h1>My Restaurants</h1>

          <div className="restaurant-grid">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant._id} restaurant={restaurant} />
            ))}
          </div>
        </>
      )}

    </div>


    {/* RIGHT PROFILE CARD */}
    <div className="profile-card">

      {user?.profileImage && (
        <img
          src={user.profileImage}
          alt="profile"
          className="profile-avatar"
        />
      )}

      <h2>{user?.username}</h2>

      <p>{user?.email}</p>

      <p className="profile-role">{user?.role}</p>

      <Link to="/edit-profile" className="profile-edit">
        Edit Profile
      </Link>

    </div>

  </div>
);
}

export default ProfilePage;
