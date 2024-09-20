import FetchDocumentDetails from "../models/FetchDocumentDetails";

function DocumentDetails() {
    const document = FetchDocumentDetails();

    return (
        <div className="doc-wrapper">
            <input type="text" value={document.title} />
            <textarea value={document.content}></textarea>
            {/* här nedanför får vi konfigurera en passande sökväg för att uppdatera */}
            <a className="submit-button purple" href={`./save/${document.doc_id}`}>Spara</a>
        </div>
    );
}

export default DocumentDetails;