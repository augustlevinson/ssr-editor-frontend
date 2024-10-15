import { Navigate } from "react-router-dom";
import FetchAll from "../models/FetchAll";
import DocumentListItem from "./DocumentListItem";
import DocumentListSharedItem from "./DocumentListSharedItem";
import FetchRole from "../models/FetchRole";

function DocumentList() {
    let documents;
    let invited;
    let collaborator;
    
    if (sessionStorage.getItem("user") === null) {
        return <Navigate to="/login" replace />;
    } else {
        documents = FetchAll();
        invited = FetchRole("invited");
        collaborator = FetchRole("collaborator");
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
