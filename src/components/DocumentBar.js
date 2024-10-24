import { useParams } from "react-router-dom";
import DocumentShare from "../components/DocumentShare.js";
import DeleteDocument from "../components/DeleteDocument.js";
import FormatButton from "./FormatButton.js";
import CommentButton from "./CommentButton.js";

function DocumentBar() {
  const slug = useParams();

  return (
      <div className="document-bar">
        <div className="document-buttons">
          <FormatButton cmd="bold" name="B" />
          <FormatButton cmd="italic" name="I" />
          <FormatButton cmd="underline" name="U" />
          <CommentButton cmd="insertHTML" name="Kommentar" doc_id={slug.id} />
        </div>
        <div className="document-actions">
          < DocumentShare />
          < DeleteDocument />
        </div>
      </div>
  );
}

export default DocumentBar;
