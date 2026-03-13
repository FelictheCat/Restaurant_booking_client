import { Link } from "react-router-dom";
import { deleteRestaurant } from "../services/restaurant.service";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function RestaurantCard({ restaurant, refreshRestaurants }) {
  const token = localStorage.getItem("authToken");
  const { user } = useContext(AuthContext);
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

{user?.role === "owner" && restaurant.owner === user._id && (
  <>
    <Link to={`/edit-restaurant/${restaurant._id}`}>
      <button>Edit</button>
    </Link>
    <button onClick={handleDelete}>Delete</button>
  </>
)}
    </div>
  );
}

export default RestaurantCard;
