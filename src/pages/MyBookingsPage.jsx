import { useEffect, useState } from "react";
import { getMyBookings } from "../services/booking.service";
import BookingCard from "../components/BookingCard";

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

      {bookings.map((booking) => {
        return <BookingCard key={booking._id} booking={booking} />;
      })}
    </div>
  );
}

export default MyBookingsPage;
