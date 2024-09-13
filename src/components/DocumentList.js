import React, { useEffect, useState } from "react";

function DocumentList() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
      fetch("http://localhost:1337/")
          .then((response) => response.json())
          .then((data) => setDocuments(data.docs))
          .catch((error) => console.error("Error fetching documents:", error));
  }, []);

  return (
    <div>
        {documents.map((doc) => (
            <h2 key={doc.id}>{doc.title}</h2>
        ))}
    </div>
  );
}

export default DocumentList;