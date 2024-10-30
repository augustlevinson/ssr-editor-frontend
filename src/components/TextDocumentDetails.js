import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { fetchUrl } from "../environment";
import { io } from "socket.io-client";
import ContentEditable from "react-contenteditable";
import SingleComment from "./SingleComment";

function TextDocumentDetails() {
  const slug = useParams();

  const [documentData, setDocumentData] = useState({
    title: "",
    content: "",
    comments: []
  });
  const [hoveredComment, setHoveredComment] = useState(null);
  
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

  const handleHoveringEnter = (commentId) => {
    setHoveredComment(parseInt(commentId));
  };

  const handleHoveringExit = () => {
    setHoveredComment(null);
  };

  return (
    <div className="layout-grid">
      <div className="main">
        <div className="doc-wrapper">
          <form>
            <div>
              <input
                className="title-input"
                type="text"
                name="title"
                value={documentData.title}
                onFocus={handleFocus}
                onChange={handleTitleChange}
              />
            </div>

            <div>
              <ContentEditable
                className="editor-textarea"
                tagName="pre"
                html={documentData.content}
                onChange={handleContentChange}
                onMouseOver={(e) => {
                  const span = e.target.closest('span.comment-highlight');
                  if (span) {
                    const commentId = span.getAttribute('id').split('-')[1];
                    handleHoveringEnter(commentId);
                  }
                }}
                onMouseOut={() => handleHoveringExit()}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="aside-right">
      <h2>Kommentarer</h2>
      {documentData.comments.map((comment) => (
          <SingleComment 
            key={comment.id}
            doc_id={slug.id}
            comment_id={comment.id} 
            content={comment.content} 
            user={comment.user} 
            created={comment.created}
            isHighlighted={hoveredComment === comment.id} 
          />
      ))}
      </div>
    </div>
  );
};

export default TextDocumentDetails;