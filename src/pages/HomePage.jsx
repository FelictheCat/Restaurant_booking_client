import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getRestaurants } from "../services/restaurant.service";

import SearchBar from "../components/SearchBar";
import RestaurantCard from "../components/RestaurantCard";

import "./HomePage.css";

function HomePage() {
  const [search, setSearch] = useState("");
  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getRestaurants()
      .then((res) => {
        // show first 4 restaurants as featured
        setFeaturedRestaurants(res.data.slice(0, 4));
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    navigate(`/restaurants?search=${search}`);
  };

  return (
    <div className="home-page">

      <section className="hero">
        <h1>Find Your Next Restaurant</h1>

        <p>Discover restaurants and book your table instantly.</p>

        <form onSubmit={handleSubmit}>
          <SearchBar search={search} setSearch={setSearch} />

          <button type="submit">Search</button>
        </form>
      </section>

      <section className="featured">
        <h2>Featured Restaurants</h2>

        <div className="restaurant-grid">
          {featuredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant._id} restaurant={restaurant} />
          ))}
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>

        <div className="steps">
          <div>
            <h3>Browse</h3>
            <p>Search restaurants by cuisine or location.</p>
          </div>

          <div>
            <h3>Book</h3>
            <p>Reserve your table in seconds.</p>
          </div>

          <div>
            <h3>Enjoy</h3>
            <p>Show up and enjoy your meal.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
