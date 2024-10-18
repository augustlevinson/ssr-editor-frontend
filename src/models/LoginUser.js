import { fetchUrl } from "../environment";

async function LoginUser(details) {
    const response = await fetch(fetchUrl + '/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(details)
    })

    return await response.json();
};

export default LoginUser;