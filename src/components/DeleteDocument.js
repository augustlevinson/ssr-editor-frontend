import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import FetchDocumentDetailsGraphql from "../models/FetchDocumentDetailsGraphql";
import FetchUser from "../models/FetchUser.js";
import FetchDelete from "../models/FetchDelete.js"
import ConfirmationDelete from "./ConfirmDelete.js";

function DocumentDelete() {
  const slug = useParams();
  const user = FetchUser();
  const navigate = useNavigate();

  const document = FetchDocumentDetailsGraphql();
  const [confirmBox, setConfirmBox] = useState(false);

  const handleDeletion = async (e) => {
    e.preventDefault();

    await FetchDelete(slug);
    navigate('/');
  };

  const openConfirmation = (e) => {
    e.preventDefault();
    setConfirmBox(true);
  };

  return (
    <div>
      {user._id && document.owner && user._id === document.owner ? (
        <div className="delete-button">
          <button className="small-button red" onClick={openConfirmation}>
            Radera dokument
          </button>
        </div>
      ) : ""}
      
      <ConfirmationDelete
        boxOpen={confirmBox}
        onClose={() => setConfirmBox(false)}
        onConfirm={handleDeletion}
        title={document.title}
      />
    </div>
  );
};

export default DocumentDelete;


