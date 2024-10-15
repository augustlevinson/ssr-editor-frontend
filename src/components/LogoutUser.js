import { Navigate } from "react-router-dom";

function LogoutUser() {
  sessionStorage.removeItem("user");

  return <Navigate to="/" replace />;
}

export default LogoutUser;