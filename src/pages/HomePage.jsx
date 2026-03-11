import { useState, useEffect } from "react";
import { getRestaurants } from "../services/restaurant.service";
import RestaurantCard from "../components/RestaurantCard";

function HomePage() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRestaurants().then((res) => {
      setRestaurants(res.data);
    });
  }, []);

  const filteredRestaurants = restaurants.filter((restaurant) => {
    return restaurant.cuisine.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <h1>Find a Restaurant</h1>

      <input
        placeholder="Search cuisine..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredRestaurants.map((restaurant) => (
        <RestaurantCard key={restaurant._id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default HomePage;
