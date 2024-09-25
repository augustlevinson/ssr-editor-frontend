import { fetchUrl } from "../environment";

async function LoginUser(details) {
    const fetched = await fetch(fetchUrl + '/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(details),
    }) // it crashes here, nothing after this point gets executed
    console.log("hejeh")
    console.log(fetched)
    return fetched;

};

export default LoginUser;