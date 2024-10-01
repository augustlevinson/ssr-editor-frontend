import { useEffect, useState } from "react";
import { fetchUrl } from "../environment";
import { useCookies } from 'react-cookie';

function FetchUser() {
  const [user, setUser] = useState([]);
  const cookies = useCookies();
  let email;
  console.log(cookies)
  if (cookies[0].user) {
    email = cookies[0].user.email;
  }

  console.log(`email: ${email}`)
  useEffect(() => {
      fetch(fetchUrl + '/users/' + email)
          .then((response) => response.json())
          .then((data) => setUser(data.user))
          .catch((error) => console.error("Error fetching user details:", error));
  }, []);
  console.log(`user: ${user._id}`)

  return user._id;
}

export default FetchUser;