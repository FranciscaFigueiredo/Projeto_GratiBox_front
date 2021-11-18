import axios from "axios"
import { api } from "./apiUrl"

function signUp(body) {
    const promise = axios.post(`${api}/sign-up`, body);
    return promise;
}

export {
    signUp,
}