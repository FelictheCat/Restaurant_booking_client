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

export const assignBooking = (bookingId, token) => {
  return API.put(
    `/bookings/${bookingId}/assign`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export const cancelBooking = (bookingId, token) => {
  return API.put(
    `/bookings/${bookingId}/cancel`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export const finishBooking = (bookingId, token) => {
  return API.put(
    `/bookings/${bookingId}/finish`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};
