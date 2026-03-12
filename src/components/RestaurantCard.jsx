import { Link } from "react-router-dom";
import { deleteRestaurant } from "../services/restaurant.service";

function RestaurantCard({ restaurant, refreshRestaurants }) {
  const token = localStorage.getItem("authToken");

  const handleDelete = () => {
    deleteRestaurant(restaurant._id, token)
      .then(() => {
        if (refreshRestaurants) {
          refreshRestaurants();
        } else {
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

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

      {refreshRestaurants && <button onClick={handleDelete}>Delete</button>}
    </div>
  );
}

export default RestaurantCard;
