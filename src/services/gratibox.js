import axios from "axios"
import { api } from "./apiUrl"

function signUp(body) {
    const promise = axios.post(`${api}/sign-up`, body);
    return promise;
}

function postLogin(body) {
    const promise = axios.post(`${api}/login`, body);
    return promise;
}

function getUserPlan(token) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    const promise = axios.get(`${api}/plan`, config);
    return promise;
}

export {
    signUp,
    postLogin,
    getUserPlan,
}