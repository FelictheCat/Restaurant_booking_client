import { Link } from "react-router-dom";

function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant-card">
      {restaurant.images && restaurant.images.length > 0 && (
        <img src={restaurant.images[0]} alt={restaurant.name} width="200" />
      )}

      <h3>{restaurant.name}</h3>

      <p>{restaurant.location}</p>

      <p>{restaurant.cuisine}</p>

      <p>Tables: {restaurant.tables}</p>

      <Link to={`/restaurants/${restaurant._id}`}>View Details</Link>
    </div>
  );
}

export default RestaurantCard;
