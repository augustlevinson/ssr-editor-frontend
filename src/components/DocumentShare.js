import React, { useState } from "react";
import FetchDocumentDetailsGraphql from "../models/FetchDocumentDetailsGraphql";
import SendInvite from "../models/SendInvite";
import { mailUrl } from "../environment";
import AlertInvitation from "./AlertInvitation";
import AlertMessage from "./AlertMessage";


function DocumentShare() {
  const [recipient, setRecipient] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertBox, setAlertBox] = useState(false);
  const [confirmBox, setConfirmBox] = useState(false);

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

    if (credentials.recipient !== credentials.sender) {
      if (document.invited.includes(credentials.recipient)) {
        setAlertMessage(`${credentials.recipient + " är redan inbjuden."}`);
        openAlert();
      } else {
        openConfirmation();
        await SendInvite(credentials);
        setAlertMessage("Inbjudan skickades.");
        openAlert();
      }
    } else {
        setAlertMessage("Du har redan tillgång till dokumentet.");
        openAlert();
    }
  };

  const openConfirmation = () => {
    setConfirmBox(true);
  };

  const openAlert = () => {
    setAlertBox(true);
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
            value={recipient}
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

        <AlertMessage
        boxOpen={alertBox}
        onClose={() => setAlertBox(false)}
        header={"Inbjudan misslyckades"}
        message={alertMessage}
      />
    </div>
  );
};

export default DocumentShare;
