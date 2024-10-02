import { fetchUrl } from "../environment";

async function SendInvite(details) {
  return await fetch(fetchUrl + '/send', {
  method: 'POST',
  credentials: 'include',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify(details),
  });   
};

export default SendInvite;