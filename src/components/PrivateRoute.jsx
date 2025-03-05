import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const PrivateRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  const user = jwt_decode(token);
  return allowedRoles.includes(user.role) ? children : <Navigate to="/" />;
};

export default PrivateRoute;
