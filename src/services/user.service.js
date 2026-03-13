import API from "./api.config";

export const updateProfile = (data, token) => {
  return API.put("/users/update-profile", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const uploadProfileImage = (file, token) => {
  const formData = new FormData();
  formData.append("image", file);

  return API.post("/users/upload", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
