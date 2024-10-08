import { useEffect, useState, useRef } from "react";
import { Navigate, useParams } from "react-router-dom";
import FetchAdd from "../models/FetchAdd";

function NewDocument() {
  const [newDoc, setNewDoc] = useState(null);
  const fetchInitiated = useRef(false)
  const slug = useParams();

  useEffect(() => {
    if (fetchInitiated.current) return;

    fetchInitiated.current = true;

    const fetchDocument = async () => {
      const docId = await FetchAdd(slug.type);
      setNewDoc(docId);
    };
    fetchDocument();
  }, []);

  if (slug === 'code') {
    // koddokument
  } else {
    if (newDoc !== null) {
      return <Navigate to={'/docs/' + newDoc.new_id} replace />;
    }
  }

  return null;
}

export default NewDocument;