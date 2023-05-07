import {ICheckResponse} from "../types/types";
// const response = await fetch(`${API_USER}/register`,{
//     method: "POST",
//     mode: "cors",
//     cache: "no-cache",
//     credentials: "same-origin",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({})
// })
// return response.json()


export const checkResponse = (response: ICheckResponse) => {
    if (!response.ok) {
        throw new Error("Ответ сети был не ok.");
    }
    return response.json();
}