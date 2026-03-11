import API from "./api.config";

export const createBooking = (data, token) => {
  return API.post("/bookings", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getMyBookings = (token) => {
  return API.get("/bookings/my-bookings", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getOwnerBookings = (token) => {
  return API.get("/bookings/owner-bookings", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
