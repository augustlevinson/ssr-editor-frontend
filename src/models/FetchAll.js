import { useEffect, useState } from "react";

function FetchAll() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
      fetch("http://localhost:1337/")
          .then((response) => response.json())
          .then((data) => setDocuments(data.docs))
          .catch((error) => console.error("Error fetching documents:", error));
  }, []);

  return documents;
}

export default FetchAll;