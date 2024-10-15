import { useEffect, useState } from "react";
import { fetchUrl } from "../environment";

function FetchRole(role) {
  const user = sessionStorage.getItem("user");
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
      fetch(fetchUrl + "/role/" + role, {
        credentials: 'include',
        headers: {
          'Session-Variable': user,
        },
      })
          .then((response) => response.json())
          .then((data) => setDocuments(data.docs))
          .catch((error) => console.error("Error fetching documents:", error));
  }, []);

  return documents;
}

export default FetchRole;