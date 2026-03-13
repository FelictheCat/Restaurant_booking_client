import { useEffect, useState } from "react";
import { getMyBookings } from "../services/booking.service";
import BookingCard from "../components/BookingCard";
import "./MyBookingsPage.css";

function MyBookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    getMyBookings(token)
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>My Bookings</h1>

      <div className="booking-grid">
        {bookings.map((booking) => (
          <BookingCard
            key={booking._id}
            booking={booking}
          />
        ))}
      </div>
    </div>
  );
}

export default MyBookingsPage;
