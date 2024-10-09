function SingleComment(props) {

  return (
    <div className="single-comment-wrapper">
      <div className="docRowTitle">
        <p key={props.comment_id}>{props.content}</p>
      </div>
        <p className="created">Av Användare Userson</p>
    </div>
  );
}

export default SingleComment;