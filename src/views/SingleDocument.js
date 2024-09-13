import { useParams } from "react-router-dom";
import DocumentDetails from "../components/DocumentDetails.js";

function SingleDocument() {
  const slug = useParams();

  return (
    <div className="main">
      < DocumentDetails id={slug} />
    </div>
  );
}

export default SingleDocument;
