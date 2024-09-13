import { useEffect, useState } from "react";

function DocumentDetails(id) {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
      fetch('http://localhost:1337/docs/' + id)
          .then((response) => response.json())
          .then((data) => setDocuments(data.doc))
          .catch((error) => console.error("Error fetching documents:", error));
  }, []);

  return (
    <div>
        <h1>{documents.title}</h1>
        <p>{documents.content}</p>
    </div>
  );
}

export default DocumentDetails;