import { Link } from "react-router-dom";
import { deleteRestaurant } from "../services/restaurant.service";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./RestaurantCard.css";

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

      <div className="btn-group">
        <Link className="btn" to={`/restaurants/${restaurant._id}`}>
          View Details
        </Link>

        {user?.role === "owner" && restaurant.owner === user._id && (
          <>
            <Link className="btn" to={`/edit-restaurant/${restaurant._id}`}>
              Edit
            </Link>

            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default RestaurantCard;
