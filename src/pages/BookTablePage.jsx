import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createBooking } from "../services/booking.service";
import { AuthContext } from "../context/AuthContext";

function BookTablePage() {
  const { restaurantId } = useParams();
  const { isLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const [bookingData, setBookingData] = useState({
    date: "",
    guests: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setBookingData({
      ...bookingData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("authToken");

    createBooking(
      {
        ...bookingData,
        restaurant: restaurantId,
      },
      token,
    )
      .then(() => {
        navigate("/my-bookings");
      })
      .catch((error) => console.log(error));
  };

  if (!isLoggedIn) {
    return <p>Please login to make a booking.</p>;
  }

  return (
    <div>
      <h1>Book Table</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          value={bookingData.date}
          onChange={handleChange}
        />

        <input
          type="number"
          name="guests"
          placeholder="Guests"
          value={bookingData.guests}
          onChange={handleChange}
        />

        <button type="submit">Book</button>
      </form>
    </div>
  );
}

export default BookTablePage;
