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

function getUserInfo(token) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    const promise = axios.get(`${api}/user-info`, config);
    return promise;
}

function getPlans(token) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    };
    const promise = axios.get(`${api}/plan-types`, config);
    return promise;
}

function getStates(token) {
  const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
  };
  const promise = axios.get(`${api}/states`, config);
  return promise;
}

function toSign(body, token) {
  const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
  };
  const promise = axios.post(`${api}/to-sign`, body, config);
  return promise;
}

export {
    signUp,
    postLogin,
    getUserPlan,
    getUserInfo,
    getPlans,
    getStates,
    toSign,
}