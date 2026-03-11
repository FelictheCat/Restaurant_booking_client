import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function OwnerRoute({ children }) {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!user || user.role !== "owner") {
    return <Navigate to="/" />;
  }

  return children;
}

export default OwnerRoute;
