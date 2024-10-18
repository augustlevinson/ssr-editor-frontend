import { fetchUrl } from "../environment";

async function AddComment(details) {
    const user = sessionStorage.getItem("user");

    return await fetch(fetchUrl + '/comment/add', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Session-Variable': user,
    },
    body: JSON.stringify(details)
    });   
};

export default AddComment;