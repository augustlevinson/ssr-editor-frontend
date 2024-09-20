function DocumentListItem(props) {

  return (
    <div class="docRow">
        <h2 key={props.doc_id}><a href={'./docs/' + props.doc_id}>{props.title}</a></h2>
        {/* Vill vi ha sekunder med här? Jag tog bort dem så länge. */}
        <p class="created">Senast ändrad {props.updated.slice(0, -3)}</p>
    </div>
  );
}

export default DocumentListItem;