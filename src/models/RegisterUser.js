import { fetchUrl } from "../environment";

async function RegisterUser(details) {
    const response = await fetch(fetchUrl + '/users/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(details),
    });

    return await response.json()
};

export default RegisterUser;