import { fetchUrl } from "../environment";

async function EditDocumentDetails(details) {
    return await fetch(fetchUrl + '/edit', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(details),
    });   
};

export default EditDocumentDetails;