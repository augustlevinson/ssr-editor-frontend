import { fetchUrl } from "../environment";

async function FetchAdd(type) {
  const user = sessionStorage.getItem("user");
  const response = await fetch(fetchUrl + '/add/' + type, {
    credentials: 'include',
    headers: {
      'Session-Variable': user,
    },
  });
  const data = await response.json();
  return data;
}

export default FetchAdd;