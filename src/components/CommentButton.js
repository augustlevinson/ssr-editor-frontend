import React, { useState } from "react";
import AddComment from "../models/AddComment";

function CommentButton(props) {
  const [openComment, setOpenComment] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [id, setId] = useState(null); // Vi använder state så att ID:t inte dubbelgenereras
  const handleCommentChange = (e) => {
    const comment = e.target.value;
    setCommentText(comment);
  };

  const handleSubmit = async () => {
    const commentDetails = {
      doc_id: props.doc_id,
      comment_id: id,
      content: commentText,
    };

    setOpenComment(!openComment);
    setCommentText("");

    await AddComment(commentDetails);
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
    <div>
      <button
        className="comment-button"
        key={props.cmd}
        type="button"
        onMouseDown={handleButtonClick}
      >
        {props.name}
      </button>
      {openComment && (
        <div>
          <input
            type="text"
            name="comment"
            value={commentText}
            onChange={handleCommentChange}
          />
          <button onClick={handleSubmit} type="button">
            Kommentera
          </button>
        </div>
      )}
    </div>
  );
}

export default CommentButton;