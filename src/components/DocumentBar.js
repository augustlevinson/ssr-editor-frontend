import DocumentShare from "../components/DocumentShare.js";
import DeleteDocument from "../components/DeleteDocument.js";
import FormatButton from "./FormatButton.js";

function DocumentBar({ docId }) {

  return (
      <div className="document-bar">
        <div className="format-buttons">
          <FormatButton cmd="bold" name="B" />
          <FormatButton cmd="italic" name="I" />
          <FormatButton cmd="underline" name="U" />
        </div>
        <div className="document-buttons">
          < DocumentShare />
          < DeleteDocument />
        </div>
      </div>
  );
}

export default DocumentBar;
