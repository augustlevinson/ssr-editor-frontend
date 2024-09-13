import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function ResetDb() {

  useEffect(() => {
      fetch("http://localhost:1337/reset")
          .then((response) => response.json())
  }, []);

  return <Navigate to="/" replace />;
}

export default ResetDb;