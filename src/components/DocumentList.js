let invited_gql;
let collaborator_gql;
let allDocs = [];
const user = sessionStorage.getItem("user");

if (user === null) {
    return <Navigate to="/login" replace />;
} else {
    const email = JSON.parse(user).email;
    const token = JSON.parse(user).token;
    const query = `{ docs
            (email: "${email}", token: "${token}")
            { doc_id title type updated}
        }`;

    documents_gql = FetchAllGraphql(query);
    invited_gql = FetchRoleGraphql("invited");
    collaborator_gql = FetchRoleGraphql("collaborator");
}

// Extract titles
const titles = [
    ...documents_gql.map(doc => ({ ...doc, source: 'documents' })),
    ...collaborator_gql.map(doc => ({ ...doc, source: 'collaborators' })),
    ...invited_gql.map(doc => ({ ...doc, source: 'invited' }))
];

// Sort titles
const sortedTitles = sortDocs
    ? titles.sort((a, b) => a.title.localeCompare(b.title))
    : titles;

return sortedTitles.length === 0 ? (
    <div>
        <h1 className="no-docs-title">
            Du har inga dokument, skapa ett genom att klicka nedan! 
        </h1>
        <CreateDocument />
    </div>
) : (
    <div className="main">
        <h1 className="doc-list-title">
            Dokument
            <div>
                <button className="doc-view-button medium-blue" onClick={toggleDocView}>
                    {docView === "list" ? "Visa rutnät" : "Visa lista"}
                </button>
                <button className="doc-view-button medium-blue" onClick={toggleSort}>
                    {sortDocs ? "Sortera Ö-A" : "Sortera A-Ö"}
                </button>
            </div>
        </h1>
        <div className={docView === "list" ? "list-view" : "block-view"}>
            {sortedTitles.map((doc) => (
                docView === "list" ? (
                    doc.source === 'documents' ? (
                        <DocumentListItem
                            key={doc.doc_id}
                            doc_id={doc.doc_id}
                            title={doc.title}
                            type={doc.type}
                            updated={doc.updated}
                        />
                    ) : doc.source === 'collaborators' ? (
                        <DocumentListSharedItem
                            key={doc.doc_id}
                            doc_id={doc.doc_id}
                            title={doc.title}
                            type={doc.type}
                            updated={doc.updated}
                            invited={false}
                        />
                    ) : (
                        <DocumentListSharedItem
                            key={doc.doc_id}
                            doc_id={doc.doc_id}
                            title={doc.title}
                            type={doc.type}
                            updated={doc.updated}
                            invited={true}
                        />
                    )
                ) : (
                    <div key={doc.doc_id}>
                        {doc.source === 'documents' ? (
                            <DocumentIconItem
                                doc_id={doc.doc_id}
                                title={doc.title}
                                type={doc.type}
                                updated={doc.updated}
                            />
                        ) : doc.source === 'collaborators' ? (
                            <DocumentIconSharedItem
                                doc_id={doc.doc_id}
                                title={doc.title}
                                type={doc.type}
                                updated={doc.updated}
                                invited={false}
                            />
                        ) : (
                            <DocumentIconSharedItem
                                doc_id={doc.doc_id}
                                title={doc.title}
                                type={doc.type}
                                updated={doc.updated}
                                invited={true}
                            />
                        )}
                    </div>
                )
            ))}
        </div>
        <div className="wrapper">
            <a className="submit-button medium-blue" href={`${baseUrl}/create`}>Skapa nytt</a>
        </div>
    </div>
);