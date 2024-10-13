import DocumentList from "../components/DocumentList";

function Documents() {
    return (
        <div className="main">
            <h1>Dokument</h1>
            < DocumentList />
            <div className="wrapper">
                <a className="submit-button bright-blue" href="/create">Skapa nytt</a>
            </div>
        </div>
    );
}

export default Documents;
