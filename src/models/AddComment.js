import { fetchUrl } from "../environment";

async function AddComment(details) {
    return await fetch(fetchUrl + '/comment/add', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(details),
    credentials: 'include'
    });   
};

export default AddComment;