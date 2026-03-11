function BookingCard({ booking }) {
  return (
    <div className="booking-card">
      <h3>{booking.restaurant?.name}</h3>

      <p>Date: {booking.date}</p>

      <p>Guests: {booking.guests}</p>

      <p>Status: {booking.status}</p>

      {booking.tableNumber && <p>Table: {booking.tableNumber}</p>}
    </div>
  );
}

export default BookingCard;
