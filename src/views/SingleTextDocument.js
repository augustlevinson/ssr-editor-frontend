import { useParams } from "react-router-dom";
import TextDocumentDetails from "../components/TextDocumentDetails.js";
import DocumentBar from "../components/DocumentBar.js";

function SingleTextDocument() {
    const slug = useParams();

    return (
        <div>
            <DocumentBar />
            <TextDocumentDetails id={slug} />
        </div>
    );
}

export default SingleTextDocument;
