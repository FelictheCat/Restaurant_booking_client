import { useEffect, useState } from "react";
import { getRestaurants } from "../services/restaurant.service";
import { useSearchParams } from "react-router-dom";
import "./RestaurantListPage.css";


import RestaurantCard from "../components/RestaurantCard";
import SearchBar from "../components/SearchBar";

function RestaurantListPage() {
  const [restaurants, setRestaurants] = useState([]);

  const [params, setParams] = useSearchParams();

  const initialSearch = params.get("search") || "";

  const [search, setSearch] = useState(initialSearch);

  useEffect(() => {
    getRestaurants()
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (search) {
      setParams({ search });
    } else {
      setParams({});
    }
  }, [search]);

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const query = search.toLowerCase();

    return (
      restaurant.name.toLowerCase().includes(query) ||
      restaurant.cuisine.toLowerCase().includes(query) ||
      restaurant.location.toLowerCase().includes(query)
    );
  });

  return (
    <div>
      <h1>Restaurants</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <div className="restaurant-list">
        {filteredRestaurants.length === 0 && <p>No restaurants found.</p>}

        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant._id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default RestaurantListPage;
