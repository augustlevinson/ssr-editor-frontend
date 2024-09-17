import { useEffect } from "react";

function FetchReset() {
  useEffect(() => {
    fetch("https://jsramverk-caas-aule.azurewebsites.net/reset")
        .then((response) => response.json())
}, []);
}

export default FetchReset;