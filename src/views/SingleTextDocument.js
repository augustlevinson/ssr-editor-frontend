import { useParams } from "react-router-dom";
import TextDocumentDetails from "../components/TextDocumentDetails.js";
import DocumentBar from "../components/DocumentBar.js";

function SingleTextDocument() {
    const slug = useParams();

    return (
        <div>
            <DocumentBar id={slug} />
            <TextDocumentDetails id={slug} />
            <div className="wrapper">
                <a className="submit-button red" href={"/delete/" + slug.id}>
                    Radera dokument
                </a>
            </div>
        </div>
    );
}

export default SingleTextDocument;
