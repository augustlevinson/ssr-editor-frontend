import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import FetchAdd from "../models/FetchAdd";

function NewDocument() {
  const [newDocId, setNewDocId] = useState(null);

  useEffect(() => {
    const fetchDocument = async () => {
      const docId = FetchAdd();
      setNewDocId(docId);
    };
    fetchDocument();
  }, []);

  if (newDocId !== null) {
    return <Navigate to={'/'} replace />;
  }

  return null;
}

export default NewDocument;