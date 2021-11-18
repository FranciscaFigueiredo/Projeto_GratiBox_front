import axios from "axios"
import { api } from "./apiUrl"

function signUp(body) {
    console.log(process.env.DATABASE_URL)
    const promise = axios.post(`${api}/sign-up`, body);
    return promise;
}

export {
    signUp,
}