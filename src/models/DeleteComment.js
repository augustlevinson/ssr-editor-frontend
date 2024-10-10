import { fetchUrl } from "../environment";

async function DeleteComment(body) {
    return await fetch(fetchUrl + '/comment/delete', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    });   
};

export default DeleteComment;