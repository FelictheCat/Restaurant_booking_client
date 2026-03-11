import { createContext, useEffect, useState } from "react";
import { verify } from "../services/auth.service";

const AuthContext = createContext();

function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const authenticateUser = () => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      verify(storedToken)
        .then((response) => {
          setIsLoggedIn(true);
          setUser(response.data.payload);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoggedIn(false);
          setUser(null);
          setIsLoading(false);
        });
    } else {
      setIsLoggedIn(false);
      setUser(null);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  const logoutUser = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        isLoading,
        authenticateUser,
        logoutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
