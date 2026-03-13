import { useState } from "react";
import {
  createRestaurant,
  uploadRestaurantImage,
} from "../services/restaurant.service";
import { useNavigate } from "react-router-dom";

function CreateRestaurantPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  const [restaurantData, setRestaurantData] = useState({
    name: "",
    location: "",
    cuisine: "",
    tables: 0,
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRestaurantData({
      ...restaurantData,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    uploadRestaurantImage(file, token)
      .then((res) => {
        setRestaurantData({
          ...restaurantData,
          images: [res.data.imageUrl],
        });
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createRestaurant(restaurantData, token)
      .then(() => {
        navigate("/my-restaurants");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Create Restaurant</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Restaurant Name"
          onChange={handleChange}
        />

        <input name="location" placeholder="Location" onChange={handleChange} />

        <input name="cuisine" placeholder="Cuisine" onChange={handleChange} />

        <input
          name="tables"
          type="number"
          placeholder="Tables"
          onChange={handleChange}
        />

        <input type="file" onChange={handleImageUpload} />

        {restaurantData.images.length > 0 && (
          <img src={restaurantData.images[0]} alt="preview" width="200" />
        )}

        <button>Create</button>
      </form>
    </div>
  );
}

export default CreateRestaurantPage;
