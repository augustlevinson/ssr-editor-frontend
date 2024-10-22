import { baseUrl } from "../environment.js";
import DocumentList from "../components/DocumentList";

function Documents() {
    return (
        <div className="main">
            <h1>Dokument</h1>
            < DocumentList />
            <div className="wrapper">
                <a className="submit-button medium-blue" href={`${baseUrl}/create`}>Skapa nytt</a>
            </div>
        </div>
    );
}

export default Documents;
