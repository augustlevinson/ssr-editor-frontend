function DocumentListItem(props) {

  return (
    <div className="docRow">
      <div className="docRowTitle">
        <img className="docRowIcon" src={"images/" + props.type + "-icon.png"} alt="Document icon" />
        <h2 key={props.doc_id}><a href={'./docs/' + props.doc_id}>{props.title}</a></h2>
      </div>
        <p className="created">Senast ändrad {props.updated.slice(0, -3)}</p>
    </div>
  );
}

export default DocumentListItem;