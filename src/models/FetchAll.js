import { useEffect, useState } from "react";

function FetchAll() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
      fetch("https://jsramverk-caas-aule.azurewebsites.net/")
          .then((response) => response.json())
          .then((data) => setDocuments(data.docs))
          .catch((error) => console.error("Error fetching documents:", error));
  }, []);

  return documents;
}

export default FetchAll;