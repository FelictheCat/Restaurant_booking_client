import { useEffect, useState } from "react";
import { getRestaurants } from "../services/restaurant.service";
import RestaurantCard from "../components/RestaurantCard";

function RestaurantListPage() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants()
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>

      {restaurants.map((restaurant) => {
        return <RestaurantCard key={restaurant._id} restaurant={restaurant} />;
      })}
    </div>
  );
}

export default RestaurantListPage;
