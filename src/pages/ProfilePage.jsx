import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

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
    <div>
      <h1>Profile</h1>

      <h2>User Info</h2>

      <p>Username: {user?.username}</p>
      <p>Email: {user?.email}</p>
      <p>Role: {user?.role}</p>

      <button>Edit Profile</button>

      <hr />

      <h2>My Bookings</h2>

      {bookings.map((booking) => (
        <BookingCard key={booking._id} booking={booking} />
      ))}

      {user?.role === "owner" && (
        <>
          <h2>My Restaurants</h2>

          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant._id} restaurant={restaurant} />
          ))}
        </>
      )}
    </div>
  );
}

export default ProfilePage;
