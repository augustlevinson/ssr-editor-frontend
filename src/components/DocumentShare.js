import React, { useState } from "react";
import FetchDocumentDetailsGraphql from "../models/FetchDocumentDetailsGraphql";
import SendInvite from "../models/SendInvite";
import { mailUrl } from "../environment";


function DocumentShare() {
  const [recipient, setRecipient] = useState("");

  const document = FetchDocumentDetailsGraphql();

  const user = JSON.parse(sessionStorage.getItem("user"));
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let credentials = {
      recipient: recipient,
      sender: user.email,
      doc_id: document.doc_id,
      url: mailUrl
    }

    if (!credentials.recipient === credentials.sender) {
      return await SendInvite(credentials)
    } else {
      alert("Du har redan tillgång till dokumentet.")
    }

  };

  return (
    <div>
      <form
        className="invite-form"
        onSubmit={handleSubmit}>
        <div>
          <input
            className="invite-input"
            type="email"
            name="email"
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="E-post..."
            required
          />
        </div>
        <button className="small-button dark-blue" type="submit">Skicka inbjudan</button>
      </form>
    </div>
  );
};

export default DocumentShare;
