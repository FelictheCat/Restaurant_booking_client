import API from "./api.config";

export const signup = (userData) => {
  return API.post("/auth/signup", userData);
};

export const login = (userData) => {
  return API.post("/auth/login", userData);
};

export const verify = (token) => {
  return API.get("/auth/verify", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
