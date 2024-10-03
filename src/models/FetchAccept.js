import { fetchUrl } from "../environment";

async function FetchAccept(slug) {
  const response = await fetch(fetchUrl + '/accept/' + slug.id, {credentials: 'include'});
  const data = await response.json();
  return data;
}

export default FetchAccept;