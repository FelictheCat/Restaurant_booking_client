import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./BookingCard.css";

import {
  assignBooking,
  cancelBooking,
  finishBooking,
} from "../services/booking.service";

function BookingCard({ booking, refreshBookings }) {
  const { user } = useContext(AuthContext);

  const token = localStorage.getItem("authToken");

  const handleAssign = () => {
    assignBooking(booking._id, token).then(() => {
      if (refreshBookings) {
        refreshBookings();
      } else {
        window.location.reload();
      }
    });
  };

  const handleCancel = () => {
    cancelBooking(booking._id, token).then(() => {
      if (refreshBookings) {
        refreshBookings();
      } else {
        window.location.reload();
      }
    });
  };

  const handleFinish = () => {
    finishBooking(booking._id, token).then(() => {
      if (refreshBookings) {
        refreshBookings();
      } else {
        window.location.reload();
      }
    });
  };

  const statusColors = {
    requested: "orange",
    assigned: "blue",
    finished: "green",
    cancelled: "red",
  };

  return (
    <div className={`booking-card booking-${booking.status}`}>
      <p>
        <strong>Restaurant:</strong> {booking.restaurant?.name}
      </p>

      {booking.customer && (
        <p>
          <strong>Customer:</strong> {booking.customer.username}
        </p>
      )}

      <p>
        <strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}
      </p>
      <p>
        <strong>Guests:</strong> {booking.guests}
      </p>
      <p>
        <strong>Status:</strong> {booking.status}
      </p>

      <div className="btn-group">
        {user?.role === "owner" && booking.status === "requested" && (
          <>
            <button className="btn" onClick={handleAssign}>
              Assign
            </button>

            <button className="btn btn-danger" onClick={handleCancel}>
              Cancel
            </button>
          </>
        )}

        {user?.role === "owner" && booking.status === "assigned" && (
          <>
            <button className="btn" onClick={handleFinish}>
              Finish
            </button>

            <button className="btn btn-danger" onClick={handleCancel}>
              Cancel
            </button>
          </>
        )}

        {user?.role === "customer" && booking.status === "requested" && (
          <button className="btn btn-danger" onClick={handleCancel}>
            Cancel Booking
          </button>
        )}
      </div>
    </div>
  );
}

export default BookingCard;
