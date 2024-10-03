import { Navigate, useParams } from "react-router-dom";
import FetchAccept from "../models/FetchAccept";

function AcceptInvitation() {
  const slug = useParams();

  FetchAccept(slug);

  return <Navigate to="/" replace />;
}

export default AcceptInvitation;