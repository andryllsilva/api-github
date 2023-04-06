import { baseUrl } from "../variables.js"

async function getUser(userName){
    let response = await fetch(`${baseUrl}/${userName}`);
    return await response.json();
}

export{getUser}