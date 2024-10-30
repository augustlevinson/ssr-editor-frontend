import { useEffect, useState } from "react";
import { fetchUrl } from "../environment";

function FetchRoleGraphql(role) {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const [documents, setDocuments] = useState([]);
    const email = user.email;
    const token = user.token;

    const query = `{ ${role}
    (email: "${email}", token: "${token}")
    { doc_id title type updated}
}`

    useEffect(() => {
        fetch(fetchUrl + "/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Session-Variable": user,
            },
            body: JSON.stringify({ query: query }),
        })
            .then((response) => response.json())
            .then((data) => {
              setDocuments(data.data.collaborator);
              if (role === "invited") {
                setDocuments(data.data.invited);
              } else if (role === "collaborator") {
                setDocuments(data.data.collaborator);
              }
            })
            .catch((error) => console.error("Error fetching documents:", error));
    }, [query, user, role]);

    return documents;
}

export default FetchRoleGraphql;