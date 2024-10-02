import DocumentShare from "../components/DocumentShare.js";

function DocumentBar(props) {

  return (
      <div className="document-bar">
        < DocumentShare id={props.id}/>
      </div>
  );
}

export default DocumentBar;
