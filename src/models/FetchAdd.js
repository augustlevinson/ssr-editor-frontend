import { fetchUrl } from "../environment";

async function FetchAdd(type) {
  const user = JSON.parse(sessionStorage.getItem("user"));

  const details = {
    title: "Namnlöst dokument",
    content: "",
    email: user.email,
    type: type
  }

  const response = await fetch(fetchUrl + '/add/' + type, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(details)
  });

  const data = await response.json();
  return data;
}

export default FetchAdd;