import { useEffect, useState } from "react";
import { getOwnerBookings } from "../services/booking.service";
import BookingCard from "../components/BookingCard";

function ManageBookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    getOwnerBookings(token)
      .then((res) => {
        setBookings(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Manage Bookings</h1>

      {bookings.map((booking) => (
        <BookingCard key={booking._id} booking={booking} />
      ))}
    </div>
  );
}

export default ManageBookingsPage;
