import FetchDocumentDetails from "../models/FetchDocumentDetails";

function DocumentDetails() {

  const document = FetchDocumentDetails();

  return (
    <div>
        <h1>{document.title}</h1>
        <p>{document.content}</p>
    </div>
  );
}

export default DocumentDetails;