import { fetchUrl } from "../environment";

async function SendInvite(details) {
  const user = sessionStorage.getItem("user");
  return await fetch(fetchUrl + '/send', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      'Session-Variable': user,
  },
  body: JSON.stringify(details),
  });   
};

export default SendInvite;