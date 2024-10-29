import { useState } from "react";
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
        <DocumentList
            docView={docView}
            sortDocs={sortDocs}
            toggleDocView={toggleDocView}
            toggleSort={toggleSort}
        />
    );
}

export default Documents;