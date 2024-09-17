function DocumentListItem(props) {

  return (
    <div class="docRow">
        <h2 key={props.doc_id}><a href={'/docs/' + props.doc_id}>{props.title}</a></h2>
        <p class="created">Skapad {props.created}</p>
    </div>
  );
}

export default DocumentListItem;