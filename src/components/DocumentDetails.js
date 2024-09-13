import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DocumentDetails() {
  const [documents, setDocuments] = useState([]);
  const slug = useParams();

  useEffect(() => {
      fetch('http://localhost:1337/docs/' + slug.id)
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