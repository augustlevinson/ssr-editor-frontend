import { Navigate } from "react-router-dom";
import FetchAll from "../models/FetchAll";
import FetchAllGraphql from "../models/FetchAllGraphql";
import DocumentListItem from "./DocumentListItem";
import DocumentListSharedItem from "./DocumentListSharedItem";
import FetchRole from "../models/FetchRole";

function DocumentList() {
    let documents_gql;
    let documents;
    let invited;
    let collaborator;
    const user = sessionStorage.getItem("user");
    
    if (user === null) {
        return <Navigate to="/login" replace />;
    } else {
        const email = JSON.parse(user).email
        const token = JSON.parse(user).token
        const query = `{ docs
                (email: "${email}", token: "${token}")
                { doc_id title type updated}
            }`

        documents_gql = FetchAllGraphql(query);
        // documents = FetchAll();
        invited = FetchRole("invited");
        collaborator = FetchRole("collaborator");
    }


    return (
        <div>
            <div>
                {documents_gql.map((doc) => (
                    <DocumentListItem
                        key={doc.doc_id}
                        doc_id={doc.doc_id}
                        title={doc.title}
                        type={doc.type}
                        updated={doc.updated} />
                ))}
                {/* {documents.map((doc) => (
                    <DocumentListItem
                        key={doc.doc_id}
                        doc_id={doc.doc_id}
                        title={doc.title}
                        type={doc.type}
                        updated={doc.updated} />
                ))} */}
            </div>
            <div>
                <h1>Delas med mig</h1>
                {collaborator.map((doc) => (
                    <DocumentListSharedItem
                        key={doc.doc_id}
                        doc_id={doc.doc_id}
                        title={doc.title}
                        type={doc.type}
                        updated={doc.updated}
                        invited={false}
                    />
                ))}
                {invited.map((doc) => (
                    <DocumentListSharedItem
                        key={doc.doc_id}
                        doc_id={doc.doc_id}
                        title={doc.title}
                        type={doc.type}
                        updated={doc.updated}
                        invited={true}
                    />
                ))}
            </div>
        </div>
    );
}

export default DocumentList;
