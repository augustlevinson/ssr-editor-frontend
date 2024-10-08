import { Navigate } from "react-router-dom";
import FetchAll from "../models/FetchAll";
import DocumentListItem from "./DocumentListItem";
import DocumentListSharedItem from "./DocumentListSharedItem";
import FetchUser from "../models/FetchUser";
import FetchRole from "../models/FetchRole";

function DocumentList() {
    const user = FetchUser();
    const documents = FetchAll(user);
    const invited = FetchRole("invited");
    const collaborator = FetchRole("collaborator");

    if (documents === "unauthenticated") {
        return <Navigate to="/login" replace />;
    }

    return (
        <div>
            <div>
                {documents.map((doc) => (
                    <DocumentListItem doc_id={doc.doc_id} title={doc.title} type={doc.type} updated={doc.updated} />
                ))}
            </div>
            <div>
                <h1>Delas med mig</h1>
                {collaborator.map((doc) => (
                    <DocumentListSharedItem
                        doc_id={doc.doc_id}
                        title={doc.title}
                        type={doc.type}
                        updated={doc.updated}
                        invited={false}
                    />
                ))}
                {invited.map((doc) => (
                    <DocumentListSharedItem
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
