import { fetchUrl } from "../environment";

async function FetchAdd() {
  const response = await fetch(fetchUrl + '/add', {credentials: 'include'});
  const data = await response.json();
  return data;
}

export default FetchAdd;