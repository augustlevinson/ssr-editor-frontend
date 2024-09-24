import { useParams, Navigate } from "react-router-dom";
import FetchDelete from "../models/FetchDelete";


function DeleteDocument() {
  const slug = useParams();

  FetchDelete(slug);

  return <Navigate to="/" replace />;
}

export default DeleteDocument;