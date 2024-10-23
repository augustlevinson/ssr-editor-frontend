import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function LogoutUser({ updateUserStatus }) {
  useEffect(() => {
    sessionStorage.removeItem("user");
    
    updateUserStatus();
  }, [updateUserStatus]);

  return <Navigate to="/" replace />;  
}

export default LogoutUser;
