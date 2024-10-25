function DocumentIconItem(props) {

  return (
    <div className="docBlock">
      <div className="docBlockTitle">
        <img className="docBlockIcon" src={"images/" + props.type + "-icon.png"} alt="Document icon" />
        <h2 key={props.doc_id}><a href={'./docs/' + props.type + '/' + props.doc_id}>{props.title}</a></h2>
        <p className="created">Senast ändrad {props.updated.slice(0, -3)}</p>
      </div>
    </div>
  );
}

export default DocumentIconItem;