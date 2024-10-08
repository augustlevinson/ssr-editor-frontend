import { fetchUrl } from "../environment";

async function FetchAdd(type) {
  const response = await fetch(fetchUrl + '/add/' + type, {credentials: 'include'});
  const data = await response.json();
  return data;
}

export default FetchAdd;