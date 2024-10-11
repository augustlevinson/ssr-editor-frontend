async function ExecuteCode(content) {
    let data = {
        code: btoa(content)
    };
    let decodedOutput;
    
    await fetch("https://execjs.emilfolino.se/code", {
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST'
    })
    .then((response) => response.json())
    .then((result) => decodedOutput = atob(result.data));
    
    console.log(decodedOutput)
    return decodedOutput;
}

export default ExecuteCode;