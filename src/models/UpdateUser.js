import { fetchUrl } from "../environment";

async function UpdateUser(details) {
    const response = await fetch(fetchUrl + '/users/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(details),
    })

    return await response.json();
};

export default UpdateUser;