import { useEffect, useState } from "react";
import { getMyRestaurants } from "../services/restaurant.service";
import RestaurantCard from "../components/RestaurantCard";


function MyRestaurantsPage() {
  const [restaurants, setRestaurants] = useState([]);

  const loadRestaurants = () => {
    const token = localStorage.getItem("authToken");

    getMyRestaurants(token)
      .then((res) => setRestaurants(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadRestaurants();
  }, []);

  return (
    <div>
      <h1>My Restaurants</h1>

      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant._id} restaurant={restaurant} refreshRestaurants={loadRestaurants}/>
      ))}
    </div>
  );
}

export default MyRestaurantsPage;
