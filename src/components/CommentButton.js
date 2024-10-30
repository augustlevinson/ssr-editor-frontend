import React, { useState } from "react";
import AddComment from "../models/AddComment";
import DeleteComment from "../models/DeleteComment";
import AlertMessage from "./AlertMessage";

function CommentButton(props) {
  const [openComment, setOpenComment] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [id, setId] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertBox, setAlertBox] = useState(false);
 
  const handleCommentChange = (e) => {
    const comment = e.target.value;
    setCommentText(comment);
  };

  let commentDetails;

  const handleSubmit = async () => {
      commentDetails = {
        doc_id: props.doc_id,
        comment_id: id,
        content: commentText,
      };
  
      setOpenComment(!openComment);
      setCommentText("");
  
      await AddComment(commentDetails);

  };
  
  const handleSubmitError = async () => {
    setAlertMessage(`Du måste ange en kommentar!
      Alternativt 'Avbryt' för att avbryta.`)
    openAlert();
  };

  const openAlert = () => {
    setAlertBox(true);
  };
  
  const handleCancel = async () => {
    setOpenComment(!openComment);
    setCommentText("");

    commentDetails = {
      doc_id: props.doc_id,
      comment_id: id,
    };
    await DeleteComment(commentDetails)
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenComment(!openComment);

    const newId = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    setId(newId);

    let selected = window.getSelection();
    let comment = `<span class="comment-highlight" id="comment-${newId}">${selected}</span>`;
    document.execCommand(props.cmd, false, comment);
  };

  return (
    <div className="add-comment">
      {!openComment && (
        <button
          className="comment-button small-button dark-blue"
          key={props.cmd}
          type="button"
          onMouseDown={handleButtonClick}
        >
          {props.name}
        </button>
      )}
      {openComment && (
        <div className="comment-input">
          <input
            type="text"
            name="comment"
            value={commentText}
            onChange={handleCommentChange}
          />
          <button 
            className="comment-button small-button dark-blue"
            onClick={commentText.trim() === "" ? handleSubmitError : handleSubmit}
            type="button">
            Kommentera
          </button>
          <button 
            className="comment-button small-button gray"
            onClick={handleCancel} type="button">
            Avbryt
          </button>
        </div>
      )}

      <AlertMessage
        boxOpen={alertBox}
        onClose={() => setAlertBox(false)}
        header={"Felaktig kommentar"}
        message={alertMessage}
      />
    </div>
  );
}

export default CommentButton;