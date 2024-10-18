import { useEffect, useState } from "react";
import { fetchUrl } from "../environment";

function FetchCollaboratorGraphql(incomingQuery) {
    const user = sessionStorage.getItem("user");
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        fetch(fetchUrl + "/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Session-Variable": user,
            },
            body: JSON.stringify({ query: incomingQuery }),
        })
            .then((response) => response.json())
            .then((data) => setDocuments(data.data.docs))
            .catch((error) => console.error("Error fetching documents:", error));
    }, [incomingQuery, user]);

    return documents;
}

export default FetchCollaboratorGraphql;
