import { useEffect } from "react";
import { fetchUrl } from "../environment";

function FetchReset() {
  useEffect(() => {
    fetch(fetchUrl + '/reset')
        .then((response) => response.json())
}, []);
}

export default FetchReset;