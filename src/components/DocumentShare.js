import React, { useState } from "react";
import FetchDocumentDetailsGraphql from "../models/FetchDocumentDetailsGraphql";
import SendInvite from "../models/SendInvite";
import { mailUrl } from "../environment";
import AlertInvitation from "./AlertInvitation";
import AlertMessage from "./AlertMessage";
import SendInvitation from "./SendInvitation";

function DocumentShare() {
  const [recipient, setRecipient] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertBox, setAlertBox] = useState(false);
  const [confirmBox, setConfirmBox] = useState(false);
  const [inviteBox, setInviteBox] = useState(false);

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
      openConfirmation();
      setInviteBox(false);
      await SendInvite(credentials)
    } else {
      setInviteBox(false);
      setAlertMessage("Du har redan tillgång till dokumentet.")
      openAlert();
    }
  };

  const openConfirmation = () => {
    setConfirmBox(true);
  };

  const openAlert = () => {
    setAlertBox(true);
  };

  const openSendInvite = () => {
    setInviteBox(true);
  };

  return (
    <div>
        <button className="small-button dark-blue"
        onClick={openSendInvite}>Dela dokument</button>
      
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

      <SendInvitation
        boxOpen={inviteBox}
        onInput={(value) => setRecipient(value)}
        onClose={() => setInviteBox(false)}
        onConfirm={handleSubmit}
        title={document.title}
      />
    </div>
  );
};

export default DocumentShare;
