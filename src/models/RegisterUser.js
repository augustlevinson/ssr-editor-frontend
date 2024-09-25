import { fetchUrl } from "../environment";

async function RegisterUser(details) {
    return await fetch(fetchUrl + '/users/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(details),
    });
};

export default RegisterUser;