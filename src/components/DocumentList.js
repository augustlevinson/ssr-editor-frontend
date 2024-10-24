import { Navigate } from "react-router-dom";
import FetchAllGraphql from "../models/FetchAllGraphql";
import DocumentListItem from "./DocumentListItem";
import DocumentListSharedItem from "./DocumentListSharedItem";
import FetchRoleGraphql from "../models/FetchRoleGraphql";

function DocumentList() {
    let documents_gql;
    let invited_gql;
    let collaborator_gql;
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
        invited_gql = FetchRoleGraphql("invited");
        collaborator_gql = FetchRoleGraphql("collaborator");
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
            </div>
            <div>
                <h1>Delas med mig</h1>
                {collaborator_gql.map((doc) => (
                    <DocumentListSharedItem
                        key={doc.doc_id}
                        doc_id={doc.doc_id}
                        title={doc.title}
                        type={doc.type}
                        updated={doc.updated}
                        invited={false}
                    />
                ))}
                {invited_gql.map((doc) => (
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
