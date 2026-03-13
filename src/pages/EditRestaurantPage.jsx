import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  getRestaurantDetails,
  updateRestaurant,
} from "../services/restaurant.service";

import { uploadRestaurantImage } from "../services/restaurant.service";

function EditRestaurantPage() {
  const { restaurantId } = useParams();
  const navigate = useNavigate();

  const token = localStorage.getItem("authToken");

  const [restaurant, setRestaurant] = useState({
    name: "",
    location: "",
    cuisine: "",
    tables: 0,
    images: [],
  });

  useEffect(() => {
    getRestaurantDetails(restaurantId)
      .then((res) => {
        setRestaurant(res.data);
      })
      .catch((err) => console.log(err));
  }, [restaurantId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRestaurant({
      ...restaurant,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("image", file);

    fetch(`${import.meta.env.VITE_API_URL}/restaurants/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setRestaurant({
          ...restaurant,
          images: [data.imageUrl],
        });
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateRestaurant(restaurantId, restaurant, token)
      .then(() => {
        navigate("/my-restaurants");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Edit Restaurant</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" value={restaurant.name} onChange={handleChange} />

        <input
          name="location"
          value={restaurant.location}
          onChange={handleChange}
        />

        <input
          name="cuisine"
          value={restaurant.cuisine}
          onChange={handleChange}
        />

        <input
          name="tables"
          type="number"
          value={restaurant.tables}
          onChange={handleChange}
        />

        <input type="file" onChange={handleImageUpload} />

        {restaurant.images?.length > 0 && (
          <img src={restaurant.images[0]} width="150" />
        )}

        <button>Save Changes</button>
      </form>
    </div>
  );
}

export default EditRestaurantPage;
