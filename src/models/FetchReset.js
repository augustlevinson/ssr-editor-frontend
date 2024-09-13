import { useEffect } from "react";

function FetchReset() {
  useEffect(() => {
    fetch("http://localhost:1337/reset")
        .then((response) => response.json())
}, []);
}

export default FetchReset;