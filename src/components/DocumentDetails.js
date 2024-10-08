import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { fetchUrl } from "../environment";
import { io } from "socket.io-client";

function DocumentDetails() {
  const slug = useParams();

  const [documentData, setDocumentData] = useState({
    title: "",
    content: ""
  });
  
  const socket = useRef(null);
  // för att fördröja uppdateringar i dokumentet
  const deferUpdate = useRef(null);

  useEffect(() => {
    socket.current = io(fetchUrl, {
      path: "/socket.io"
    });


    socket.current.on("connect", () => {
      console.log("Connected to WebSocket server");
      socket.current.emit("join", slug.id);
    });

    socket.current.on("connect_error", (err) => {
      console.error("Connection error:", err);
    });

    // hämta title och content från db när vi går in i
    // dokumentet första gången och dokumentet joinas.
    // på backenden körs denna inuti joinen, 
    // så den bör bara triggas en gång.
    socket.current.on("enterDoc", (document) => {
      console.log("Initial document:", document);
      setDocumentData({
        title: document.title,
        content: document.content
      });
    });

    socket.current.on("update", (updatedDoc) => {
      console.log("Received update:", updatedDoc);
      if (updatedDoc.doc_id === slug.id) {
        setDocumentData({
          title: updatedDoc.title,
          content: updatedDoc.content
        });
      }
    });

    socket.current.on("disconnect", (reason) => {
      console.log("Disconnected from WebSocket server:", reason);
    });

    return () => {
      socket.current.off("update");
      socket.current.off("enterDoc");
      socket.current.disconnect();
      console.log("Socket disconnected");
    };
  }, [slug.id]);

  const handleFocus = (event) => event.target.select();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDocumentData((prevState) => ({
      ...prevState,
      [name]: value === "" ? prevState[name] : value
    }));

    if (socket.current) {
      console.log("Emitting update:", documentData);
      socket.current.emit('update', { 
        doc_id: slug.id,
        // nedanstående ternary krävs för att förhindra 
        // att senast inskrivna tecknet försvinner
        title: name === "title" ? value: documentData.title, 
        content: name === "content" ? value: documentData.content 
      });
    }
  };

  return (
    <div className="doc-wrapper">
      <form>
        <div>
          <input
            type="text"
            name="title"
            value={documentData.title}
            onFocus={handleFocus}
            onChange={handleChange}
          />
        </div>

        <div>
          <textarea
            name="content"
            value={documentData.content}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default DocumentDetails;