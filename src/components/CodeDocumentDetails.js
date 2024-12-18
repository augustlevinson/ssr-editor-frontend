import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { fetchUrl } from "../environment";
import { io } from "socket.io-client";
import Editor from '@monaco-editor/react';
import ExecuteCode from "../models/ExecuteCode";

function CodeDocumentDetails() {
  const slug = useParams();

  const [documentData, setDocumentData] = useState({
    title: "",
    content: "",
  });

  const [codeOutput, setCodeOutput] = useState("")
  const [executingCode, setExecutingCode] = useState(false);
  
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
      });
    });

    socket.current.on("update", (updatedDoc) => {
      console.log("Received update:", updatedDoc);
      if (updatedDoc.doc_id === slug.id) {
        setDocumentData({
          title: updatedDoc.title,
          content: updatedDoc.content,
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
      });
    }
  };

  const handleContentChange = (value) => {
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
      });
    }
  };

  const execute = async (e) => {
    e.preventDefault();
    setExecutingCode(true);
    const output = await ExecuteCode(documentData.content);
    setCodeOutput(output);
    setExecutingCode(false);
  }

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
        <Editor
        className="code-editor"
          height="400px"
          defaultLanguage="javascript"
          value={documentData.content}
          onChange={handleContentChange}
          theme="vs-dark"
          options={{
            suggestOnTriggerCharacters: false,
            quickSuggestions: false,
        }}
        />
        </div>
        <button className="small-button execute-btn dark-blue" onClick={execute}>
          Exekvera
        </button>
      </form>
    </div>
      </div>
      <div className="aside-right">
          <h2>Output</h2>
          <div className="code-output">
          {executingCode ? (
            <div className="loader"></div>
          ) : (
            codeOutput.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))
          )}
          </div>
      </div>
    </div>
  );
};

export default CodeDocumentDetails;