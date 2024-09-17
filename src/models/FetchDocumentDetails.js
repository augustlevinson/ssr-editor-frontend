import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function FetchDocumentDetails() {
  const [document, setDocument] = useState([]);
  const slug = useParams();

  useEffect(() => {
      fetch('https://jsramverk-caas-aule.azurewebsites.net/docs/' + slug.id)
          .then((response) => response.json())
          .then((data) => setDocument(data.doc))
          .catch((error) => console.error("Error fetching document details:", error));
  }, []);

  return document;
}

export default FetchDocumentDetails;