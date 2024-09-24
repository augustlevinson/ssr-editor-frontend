import { useEffect, useState } from "react";
import { fetchUrl } from "../environment";

function FetchAdd() {
  const [document, setDocument] = useState([]);

  useEffect(() => {
    fetch(fetchUrl + '/add')
        .then((response) => response.json())
        .then((data) => setDocument(data))

  }, []);

  return document;
}

export default FetchAdd;