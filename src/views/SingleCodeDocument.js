import { useParams } from "react-router-dom";
import CodeDocumentDetails from "../components/CodeDocumentDetails.js";
import DocumentBar from "../components/DocumentBar.js";

function SingleCodeDocument() {
    const slug = useParams();

    return (
        <div>
            <DocumentBar id={slug} />
            <CodeDocumentDetails id={slug} />
            <div className="wrapper">
                <a className="submit-button red" href={"/delete/" + slug.id}>
                    Radera dokument
                </a>
            </div>
        </div>
    );
}

export default SingleCodeDocument;
