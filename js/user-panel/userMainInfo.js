import { getToken } from "../core/utils.js";


const getAndShowAllUserInformation = async () => {

    
    

    const res = await fetch(`http://localhost:4000/user/profile`, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });

    const data = await res.json();
    console.log(data);




}


export { getAndShowAllUserInformation }