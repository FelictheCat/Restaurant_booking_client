import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function LoginPage() {
  const navigate = useNavigate();

  const { authenticateUser } = useContext(AuthContext);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    login(userData)
      .then((response) => {
        const token = response.data.authToken;

        localStorage.setItem("authToken", token);

        authenticateUser();

        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
