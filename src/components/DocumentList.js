import { Navigate } from "react-router-dom";
import FetchAll from "../models/FetchAll";
import DocumentListItem from "./DocumentListItem";
import FetchUser from "../models/FetchUser";

function DocumentList() {
  const user = FetchUser()
  const documents = FetchAll(user);
  if (documents === "unauthenticated") {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
        {documents.map((doc) => (
          <DocumentListItem doc_id={doc.doc_id} title={doc.title} updated={doc.updated} />
          ))}
    </div>
  );
}

export default DocumentList;