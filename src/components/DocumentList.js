import { Navigate } from "react-router-dom";
import FetchAllGraphql from "../models/FetchAllGraphql";
import DocumentListItem from "./DocumentListItem";
import DocumentIconItem from "./DocumentIconItem";
import DocumentListSharedItem from "./DocumentListSharedItem";
import DocumentIconSharedItem from "./DocumentIconSharedItem";
import FetchRoleGraphql from "../models/FetchRoleGraphql";

function DocumentList({ docView, sortDocs }) {
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

    const sortedDocuments = sortDocs
        ? [...documents_gql].sort((a, b) => a.title.localeCompare(b.title))
        : documents_gql;
    
    const sortedCollaborators = sortDocs
        ? [...collaborator_gql].sort((a, b) => a.title.localeCompare(b.title))
        : collaborator_gql;

    const sortedInvited = sortDocs
        ? [...invited_gql].sort((a, b) => a.title.localeCompare(b.title))
        : invited_gql;
    

    return (
        <div>
            <div className={docView === "list" ? "list-view" : "block-view"}>
                {sortedDocuments.map((doc) => (
                    docView === "list" ? (
                        <DocumentListItem
                            key={doc.doc_id}
                            doc_id={doc.doc_id}
                            title={doc.title}
                            type={doc.type}
                            updated={doc.updated}
                        />
                    ) : (
                        <div key={doc.doc_id}>
                            <DocumentIconItem
                                key={doc.doc_id}
                                doc_id={doc.doc_id}
                                title={doc.title}
                                type={doc.type}
                                updated={doc.updated}
                            />
                        </div>
                    )
                ))}
            </div>
            <h1>Delas med mig</h1>
             <div className={docView === "list" ? "list-view" : "block-view"}>
                {sortedCollaborators.map((doc) => (
                    docView === "list" ? (
                        <DocumentListSharedItem
                            key={doc.doc_id}
                            doc_id={doc.doc_id}
                            title={doc.title}
                            type={doc.type}
                            updated={doc.updated}
                            invited={false}
                        />
                    ) : (
                        <div key={doc.doc_id}>
                            <DocumentIconSharedItem
                                key={doc.doc_id}
                                doc_id={doc.doc_id}
                                title={doc.title}
                                type={doc.type}
                                updated={doc.updated}
                                invited={false}
                            />
                        </div>
                    )
                ))}
                {sortedInvited.map((doc) => (
                    docView === "list" ? (
                        <DocumentListSharedItem
                            key={doc.doc_id}
                            doc_id={doc.doc_id}
                            title={doc.title}
                            type={doc.type}
                            updated={doc.updated}
                            invited={true}
                        />
                    ) : (
                        <div key={doc.doc_id}>
                            <DocumentIconSharedItem
                                key={doc.doc_id}
                                doc_id={doc.doc_id}
                                title={doc.title}
                                type={doc.type}
                                updated={doc.updated}
                                invited={true}
                            />
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}

export default DocumentList;
