import React, { useState, useEffect } from "react";
import EditDocumentDetails from "../models/EditDocumentDetails";
import FetchDocumentDetails from "../models/FetchDocumentDetails";

// detta funkar med alla dokument som läggs in via reset,
// läggs ett nytt till via /add finns en bugg, men tänker
// att /add tillhör vidareutvecklingen, så vi kan förbise nu

function DocumentDetails() {
  const document = FetchDocumentDetails();

  // dessa värden sätts innan document hunnit ladda,
  // därför sätts de till "" här, och ändras senare
  const [documentData, setDocumentData] = useState({
    title: "",
    content: ""
  });

  // kollar om document har ändrats och
  // uppdaterar DocumentData om ändringar skett
  useEffect(() => {
    if (document.title && document.content) {
      setDocumentData({
        title: document.title,
        content: document.content
      });
    }
  }, [document]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDocumentData((prevState) => ({
      ...prevState,
      // kollar om någon input har ändrats, i så fall uppdateras värdet.
      [name]: value === "" ? prevState[name] : value
    }));
  };

  // stöd för att spara med ctrl + s
  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  
  // uppdatera backenden när dokumentet sparas
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedContent = {
      ...documentData,
      _id: document._id
    }

    await EditDocumentDetails(updatedContent);
  };

  return (
    <div className="doc-wrapper">
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        <div>
          <input
            type="text"
            name="title"
            value={documentData.title}
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

        <button className="submit-button purple" type="submit">Spara</button>
      </form>
    </div>
  );
};

export default DocumentDetails;
