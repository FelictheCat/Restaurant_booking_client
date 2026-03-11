import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getRestaurantDetails } from "../services/restaurant.service";

function RestaurantDetailsPage() {
  const { restaurantId } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantDetails(restaurantId)
      .then((response) => {
        setRestaurant(response.data);
      })
      .catch((error) => console.log(error));
  }, [restaurantId]);

  if (!restaurant) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{restaurant.name}</h1>

      {restaurant.images && restaurant.images.length > 0 && (
        <img src={restaurant.images[0]} alt={restaurant.name} width="300" />
      )}

      <p>Location: {restaurant.location}</p>

      <p>Cuisine: {restaurant.cuisine}</p>

      <p>Tables: {restaurant.tables}</p>

      <Link to={`/book/${restaurant._id}`}>Book a Table</Link>
    </div>
  );
}

export default RestaurantDetailsPage;
