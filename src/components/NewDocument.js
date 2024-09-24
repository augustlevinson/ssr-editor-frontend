import { useEffect, useState, useRef } from "react";
import { Navigate } from "react-router-dom";
import FetchAdd from "../models/FetchAdd";

function NewDocument() {
  const [newDoc, setNewDoc] = useState(null);
  const fetchInitiated = useRef(false)

  useEffect(() => {
    if (fetchInitiated.current) return;

    fetchInitiated.current = true;

    const fetchDocument = async () => {
      const docId = await FetchAdd();
      setNewDoc(docId);
    };
    fetchDocument();
  }, []);

  if (newDoc !== null) {
    return <Navigate to={'/docs/' + newDoc.new_id} replace />;
  }

  return null;
}

export default NewDocument;