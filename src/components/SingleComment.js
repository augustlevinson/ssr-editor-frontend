import DeleteComment from "../models/DeleteComment";

function SingleComment(props) {

  const deleteComment = async () => {
    const details = {
      doc_id: props.doc_id,
      comment_id: props.comment_id
    }
    await DeleteComment(details)
  }

  return (
    <div className={`single-comment-wrapper ${props.isHighlighted ? 'hovered-comment' : ''}`}>
      <div className="comment-first-row">
        <div className="docRowTitle">
          <p key={props.comment_id}>{props.content}</p>
        </div>
        <button onClick={deleteComment}className="comment-delete-btn dark-blue">X</button>
      </div>
        <p className="created">{props.user} - {props.created.slice(0, -3)}</p>
    </div>
  );
}

export default SingleComment;