import React, { useState } from "react";
import { useCookies } from "react-cookie";
import FetchDocumentDetails from "../models/FetchDocumentDetails";
import SendInvite from "../models/SendInvite";
import { mailUrl } from "../environment";



function DocumentShare() {
  const [recipient, setRecipient] = useState("");
  const cookies = useCookies();

  const document = FetchDocumentDetails();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let credentials = {
      recipient: recipient,
      sender: cookies[0].user.email,
      docTitle: document.title,
      docId: document._id,
      url: mailUrl
    }

    return await SendInvite(credentials)
  };

  return (
    <div className="doc-wrapper">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="E-post..."
            required
          />
        </div>
        <button className="submit-button purple" type="submit">Bjud in</button>
      </form>
    </div>
  );
};

export default DocumentShare;
