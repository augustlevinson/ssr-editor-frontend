import { useEffect, useState } from "react";
import { fetchUrl } from "../environment";
import { useCookies } from 'react-cookie';

function FetchUser() {
  const [user, setUser] = useState([]);
  const cookies = useCookies();
  let email;
  if (cookies[0].user) {
    email = cookies[0].user.email;
  }

  useEffect(() => {
      fetch(fetchUrl + '/users/' + email)
          .then((response) => response.json())
          .then((data) => setUser(data.user))
          .catch((error) => console.error("Error fetching user details:", error));
  }, []);

  return user._id;
}

export default FetchUser;