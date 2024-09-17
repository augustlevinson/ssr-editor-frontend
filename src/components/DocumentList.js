import FetchAll from "../models/FetchAll";
import DocumentListItem from "./DocumentListItem";

function DocumentList() {
  const documents = FetchAll();

  return (
    <div>
        {documents.map((doc) => (
          <DocumentListItem doc_id={doc.doc_id} title={doc.title} created={doc.created} />
          ))}
    </div>
  );
}

export default DocumentList;