import DocumentDetails from "../components/DocumentDetails";
import DocumentList from "../components/DocumentList";
import DocumentDetailsCode from "../components/DocumentDetailsCode";


function Documents() {
    return (
        <div className="main">
            <h1>Dokument</h1>
            < DocumentDetailsCode />
            < DocumentList />
            <div className="wrapper">
                <a className="submit-button purple" href="/create">Skapa nytt</a>
            </div>
        </div>
    );
}

export default Documents;
