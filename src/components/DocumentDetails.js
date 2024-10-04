import React, { useState, useEffect } from "react";
import EditDocumentDetails from "../models/EditDocumentDetails";
import FetchDocumentDetails from "../models/FetchDocumentDetails";
import { useParams } from "react-router-dom";
import { fetchUrl } from "../environment";
import { io } from "socket.io-client"

// detta funkar med alla dokument som läggs in via reset och add

function DocumentDetails() {
  // let document = FetchDocumentDetails();
  const slug = useParams();

  // dessa värden sätts innan document hunnit ladda,
  // därför sätts de till "" här, och ändras senare
  const [documentData, setDocumentData] = useState({
    title: "",
    content: ""
  });
  const [socket, setSocket] = useState(null);

  // kollar om document har ändrats och
  // uppdaterar DocumentData om ändringar skett
  useEffect(() => {
    const newSocket = io(fetchUrl + '/docs/' + slug.id);
    setSocket(newSocket);

    newSocket.emit("join", slug.id);
    console.log("$$$$$$$$$")
    console.log(newSocket)

    newSocket.on("update", (updatedDoc) => {
      if (updatedDoc.doc_id === slug.id) {
        setDocumentData({
          title: updatedDoc.title,
          content: updatedDoc.content
        });
      }
    });

    return  () => {
      newSocket.disconnect();
    };
  }, [slug.id]);

  // useEffect(() => {
  //   const fetchDocument = async () => {

  //     if (document.title && document.content) {
  //       setDocumentData({
  //         title: document.title,
  //         content: document.content
  //       });
  //       // om content saknas, sätt content till "" (React tolkar "" som false)
  //     } else if (document.title) {
  //       setDocumentData({
  //         title: document.title,
  //         content: ""
  //       });
  //     }
  //   }
  //   fetchDocument();
  // }, [slug.id]);

  const handleFocus = (event) => event.target.select();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDocumentData((prevState) => ({
      ...prevState,
      // kollar om någon input har ändrats, i så fall uppdateras värdet.
      [name]: value === "" ? prevState[name] : value
    }));
  };

  // // stöd för att spara med ctrl + s eller cmd + s
  // const handleKeyDown = (e) => {
  //   if ((e.ctrlKey || e.metaKey) && e.key === 's') {
  //     e.preventDefault();
  //     handleSubmit(e);
  //   }
  // };
  
  // uppdatera backenden när dokumentet sparas
  const handleKeyDown = async (e) => {
    e.preventDefault();

    // await EditDocumentDetails(updatedContent);

    if (socket) {
      socket.emit('updateDocument', documentData);
    }
  };

  return (
    <div className="doc-wrapper">
      <form onKeyDown={handleKeyDown}>
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
