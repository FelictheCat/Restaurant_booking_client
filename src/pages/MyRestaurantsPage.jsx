import { useEffect, useState } from "react";
import { getMyRestaurants } from "../services/restaurant.service";
import RestaurantCard from "../components/RestaurantCard";

function MyRestaurantsPage() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    getMyRestaurants(token)
      .then((res) => {
        setRestaurants(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>My Restaurants</h1>

      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant._id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default MyRestaurantsPage;
