import React, { useState } from "react";
import FetchDocumentDetailsGraphql from "../models/FetchDocumentDetailsGraphql";
import SendInvite from "../models/SendInvite";
import { mailUrl } from "../environment";
import AlertInvitation from "./AlertInvitation";


function DocumentShare() {
  const [recipient, setRecipient] = useState("");

  const document = FetchDocumentDetailsGraphql();
  const [confirmBox, setConfirmBox] = useState(false);

  const user = JSON.parse(sessionStorage.getItem("user"));
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let credentials = {
      recipient: recipient,
      sender: user.email,
      doc_id: document.doc_id,
      url: mailUrl
    }

    if (credentials.recipient !== credentials.sender) {
      openConfirmation();
      await SendInvite(credentials)
    } else {
      alert("Du har redan tillgång till dokumentet.")
    }
  };

  const openConfirmation = () => {
    setConfirmBox(true);
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

      <AlertInvitation
        boxOpen={confirmBox}
        onClose={() => setConfirmBox(false)}
        recipient={recipient}
      />
    </div>
  );
};

export default DocumentShare;
