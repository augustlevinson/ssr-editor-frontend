import { fetchUrl } from "../environment";

async function FetchDelete(slug) {
  return await fetch(fetchUrl + '/delete', {
  method: 'DELETE',
  credentials: 'include',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify(slug),
  });   
};

export default FetchDelete;