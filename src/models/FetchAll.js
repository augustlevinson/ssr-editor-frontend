import { useEffect, useState } from "react";
import { fetchUrl } from "../environment";

function FetchAll() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
      fetch(fetchUrl, {credentials: 'include'})
          .then((response) => response.json())
          .then((data) => setDocuments(data.docs))
          .catch((error) => console.error("Error fetching documents:", error));
  }, []);

  return documents;
}

export default FetchAll;