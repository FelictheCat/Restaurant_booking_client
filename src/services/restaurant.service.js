import API from "./api.config";

export const getRestaurants = () => {
  return API.get("/restaurants");
};

export const getRestaurantDetails = (id) => {
  return API.get(`/restaurants/${id}`);
};

export const createRestaurant = (data, token) => {
  return API.post("/restaurants", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getMyRestaurants = (token) => {
  return API.get("/restaurants/my-restaurants", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const uploadRestaurantImage = (file, token) => {
  const formData = new FormData();
  formData.append("image", file);

  return API.post("/restaurants/upload", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateRestaurant = (id, data, token) => {
  return API.put(`/restaurants/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteRestaurant = (restaurantId, token) => {
  return API.delete(`/restaurants/${restaurantId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
