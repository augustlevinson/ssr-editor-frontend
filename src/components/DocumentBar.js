import DocumentShare from "../components/DocumentShare.js";
import DeleteDocument from "../components/DeleteDocument.js";

function DocumentBar(props) {

  return (
      <div className="document-bar">
        < DocumentShare id={props.id}/> {/*  Behövs id här? */}
        < DeleteDocument />
      </div>
  );
}

export default DocumentBar;
