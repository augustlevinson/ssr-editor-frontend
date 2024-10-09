import React, { useState } from "react";
import AddComment from "../models/AddComment";

function CommentButton(props) {
  let selected = window.getSelection();
  let id = Math.floor(Math.random() * (99999 - 10000 + 1)) + 100000

  const [openComment, setOpenComment] = useState(false);
  const [commentText, setCommentText] = useState("");

  const handleCommentChange = (e) => {
    const comment = e.target.value;
    setCommentText(comment)
  };

  const handleSubmit = async () => {
    const commentDetails = {
      doc_id: props.doc_id,
      comment_id: id,
      content: commentText
    }

    await AddComment(commentDetails)
  }

  return (
    <div>
      <button
        className="comment-button"
        key={props.cmd}
        type="button"
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpenComment(!openComment);
          let comment = `<span class="comment-highlight" id="comment-${id}">${selected}</span>`
          document.execCommand(props.cmd, false, comment);
        }}
        >
        {props.name}
      </button>
      { openComment && (
        <div>
          <input
            type="text"
            name="comment"
            value={commentText}
            onChange={handleCommentChange}
          />
          <button onClick={handleSubmit} type="button">Kommentera</button>
        </div>
      )}
    </div>
  );
};

export default CommentButton;