import { useParams } from "react-router-dom";
import CodeDocumentDetails from "../components/CodeDocumentDetails.js";
import DocumentBar from "../components/DocumentBar.js";

function SingleCodeDocument() {
    const slug = useParams();

    return (
        <div>
            <DocumentBar id={slug} />
            <CodeDocumentDetails id={slug} />
        </div>
    );
}

export default SingleCodeDocument;
