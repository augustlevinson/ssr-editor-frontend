import { Navigate } from "react-router-dom";

function LogoutUser({ updateUserStatus }) {
  sessionStorage.removeItem("user");
  
  updateUserStatus();
  
  return <Navigate to="/" replace />;
}

export default LogoutUser;
