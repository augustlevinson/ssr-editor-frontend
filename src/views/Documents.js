import { useState } from "react";
import { baseUrl } from "../environment.js";
import DocumentList from "../components/DocumentList";

function Documents() {
    const [docView, setDocView] = useState(localStorage.getItem("docView") || "list");
    const [sortDocs, setSortDocs] = useState(localStorage.getItem("sorting") === "true");

    // använder localstorage för att vald sortering ska "sparas"
    // även om man lämnar /, och sedan går tillbaka
    const toggleDocView = () => {
        const currentView = docView === "list" ? "block" : "list";
        setDocView(currentView);
        localStorage.setItem("docView", currentView);
    };

    const toggleSort = () => {
        const currentSorting = !sortDocs
        setSortDocs(currentSorting);
        localStorage.setItem("sorting", currentSorting);
    };

    return (
        <div className="main">
            <h1 class="doc-list-title">
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
            <DocumentList docView={docView} sortDocs={sortDocs}/>


            <div className="wrapper">
                <a className="submit-button medium-blue" href={`${baseUrl}/create`}>Skapa nytt</a>
            </div>
        </div>
    );
}

export default Documents;