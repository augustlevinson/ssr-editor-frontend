import { useEffect, useState } from "react";
import { fetchUrl } from "../environment";

function FetchUser() {
  const [user, setUser] = useState([]);
  const storedUser = JSON.parse(sessionStorage.getItem("user"));

  let email;
  if (storedUser) {
    email = storedUser.email;
  }

  useEffect(() => {
      fetch(fetchUrl + '/users/' + email)
          .then((response) => response.json())
          .then((data) => setUser(data.user))
          .catch((error) => console.error("Error fetching user details:", error));
  }, []);

  return user;
}

export default FetchUser;