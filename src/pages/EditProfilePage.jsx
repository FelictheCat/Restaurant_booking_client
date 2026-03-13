import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { updateProfile, uploadProfileImage } from "../services/user.service";

function EditProfilePage() {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();

  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [image, setImage] = useState(user.profileImage || "");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    uploadProfileImage(file, token)
      .then((res) => {
        setImage(res.data.imageUrl);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = {
      username,
      email,
      profileImage: image,
    };

    updateProfile(updatedData, token)
      .then(() => {
        authenticateUser();

        navigate("/profile");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Edit Profile</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label>Profile Image</label>
          <input type="file" onChange={handleImageUpload} />
        </div>

        {image && <img src={image} alt="profile preview" width="120" />}

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditProfilePage;
