import React, { useState, useEffect } from "react";
import EditDocumentDetails from "../models/EditDocumentDetails";
import FetchDocumentDetails from "../models/FetchDocumentDetails";
import { useParams } from "react-router-dom";
import { fetchUrl } from "../environment";
import { io } from "socket.io-client";

function DocumentDetails() {
  const slug = useParams();

  const [documentData, setDocumentData] = useState({
    title: "",
    content: ""
  });
  
  // BYT TILL useRef()!!!
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:1337", {
      path: "/socket.io",
      transports: ["websocket"]
    });

    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("Connected to WebSocket server");
      newSocket.emit("join", slug.id);
    });

    newSocket.on("connect_error", (err) => {
      console.error("Connection error:", err);
    });

    newSocket.on("update", (updatedDoc) => {
      console.log("Received update:", updatedDoc);
      // if (updatedDoc.doc_id === slug.id) {
        setDocumentData({
          title: updatedDoc.title,
          content: updatedDoc.content
        });
      // }
    });

    newSocket.on("disconnect", (reason) => {
      console.log("Disconnected from WebSocket server:", reason);
    });

    return () => {
      newSocket.disconnect();
      console.log("Socket disconnected");
    };
  }, [slug.id]);

  const handleFocus = (event) => event.target.select();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (socket) {
      console.log("Emitting update:", documentData);
      socket.emit('update', { doc_id: slug.id, title: documentData.title, content: documentData.content });
    }
    setDocumentData((prevState) => ({
      ...prevState,
      [name]: value === "" ? prevState[name] : value
    }));
  };

  // const handleKeyDown = async (e) => {
  //   e.preventDefault();

  // };

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