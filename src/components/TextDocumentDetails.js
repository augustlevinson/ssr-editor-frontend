import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { fetchUrl } from "../environment";
import { io } from "socket.io-client";
import ContentEditable from "react-contenteditable";
import FormatButton from "./FormatButton";
import CommentButton from "./CommentButton";
import SingleComment from "./SingleComment";

function TextDocumentDetails() {
  const slug = useParams();

  const [documentData, setDocumentData] = useState({
    title: "",
    content: "",
    comments: []
  });
  
  const socket = useRef(null);

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
        content: document.content,
        comments: document.comments
      });
    });

    socket.current.on("update", (updatedDoc) => {
      console.log("Received update:", updatedDoc);
      if (updatedDoc.doc_id === slug.id) {
        setDocumentData((prevState) => ({
          title: updatedDoc.title,
          content: updatedDoc.content,
          comments: updatedDoc.comments ? updatedDoc.comments : prevState.comments
        }));
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

  const handleTitleChange = (e) => {
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
        content: documentData.content,
        comments: documentData.comments
      });
    }
  };

  const handleContentChange = (e) => {
    const value = e.target.value;

    setDocumentData((prevState) => ({
      ...prevState,
      content: value
    }));

    if (socket.current) {
      console.log("Emitting update:", documentData);
      socket.current.emit('update', { 
        doc_id: slug.id,
        title: documentData.title, 
        content: value,
        comments: documentData.comments
      });
    }
  };

  return (
    <div className="layout-grid">
      <div className="main">
    <div className="doc-wrapper">
      <form>
        <div>
          <input
            type="text"
            name="title"
            value={documentData.title}
            onFocus={handleFocus}
            onChange={handleTitleChange}
          />
        </div>

        <div>
          <div className="format-buttons">
            <FormatButton cmd="bold" name="B"/>
            <FormatButton cmd="italic" name="I"/>
            <FormatButton cmd="underline" name="U"/>
          </div>
          <CommentButton cmd="insertHTML" name="Kommentar" doc_id={slug.id}/>
          <ContentEditable
            className="editor-textarea"
            tagName="pre"
            html={documentData.content}
            onChange={handleContentChange}
          />
        </div>
      </form>
    </div>
      </div>
      <div className="aside-right">
    <h2>Kommentarer</h2>
      {documentData.comments.map((comment) => (
          <SingleComment 
            doc_id={slug.id}
            comment_id={comment.id} 
            content={comment.content} 
            user={comment.user} 
            created={comment.created} 
          />
      ))}
      </div>
    </div>
  );
};

export default TextDocumentDetails;