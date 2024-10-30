import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUrl } from "../environment";

function FetchDocumentDetails() {
  const [document, setDocument] = useState([]);
  const slug = useParams();
 
  useEffect(() => {
      fetch(fetchUrl + '/docs/' + slug.id)
          .then((response) => response.json())
          .then((data) => setDocument(data.doc))
          .catch((error) => console.error("Error fetching document details:", error));
  }, [slug.id]);

  return document;
}

export default FetchDocumentDetails;