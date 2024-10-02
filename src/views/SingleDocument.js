import { useParams } from "react-router-dom";
import DocumentDetails from "../components/DocumentDetails.js";
import DocumentBar from "../components/DocumentBar.js";

function SingleDocument() {
  const slug = useParams();

  return (
    <div>
      < DocumentBar id={slug}/>
      <div className="main">
        < DocumentDetails id={slug} />
        <div className="wrapper">
          <a className="submit-button red" href={"/delete/" + slug.id}>Radera dokument</a>
        </div>
      </div>
    </div>
  );
}

export default SingleDocument;
