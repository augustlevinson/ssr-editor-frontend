import { fetchUrl } from "../environment";

async function FetchAccept(slug) {
  const user = sessionStorage.getItem("user");

  const response = await fetch(fetchUrl + '/accept/' + slug.id, {
    credentials: 'include',
    headers: {
      'Session-Variable': user,
    },
  });
  const data = await response.json();
  return data;
}

export default FetchAccept;