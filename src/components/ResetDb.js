import { Navigate } from "react-router-dom";
import FetchReset from "../models/FetchReset";

function ResetDb() {

  FetchReset();

  return <Navigate to="/" replace />;
}

export default ResetDb;