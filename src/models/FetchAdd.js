import { fetchUrl } from "../environment";

async function FetchAdd(userId) {
  const response = await fetch(fetchUrl + '/add');
  const data = await response.json();
  return data;
}

export default FetchAdd;