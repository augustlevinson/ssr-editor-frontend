import { fetchUrl } from "../environment";

async function LoginUser(details) {
    return await fetch(fetchUrl + '/users/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(details),
    });
};

export default LoginUser;