import { SET_USER, SET_CREATE, SET_UPDATE, SET_DELETE } from "../keys";
import axios from 'axios';

const key = 'kunci';

export function setUser(data) {
    return {
        type: SET_USER,
        payload: data
    }
}

export function setCreate(data) {
    return {
        type: SET_CREATE,
        payload: data
    }
}

export function setUpdate(data) {
    return {
        type: SET_UPDATE,
        payload: data
    }
}

export function setDelete(data) {
    return {
        type: SET_DELETE,
        payload: data
    }
}

export function login(payload) {
    return function () {
        return axios.post('http://localhost:4000/users/login', payload, {
            headers: { key }
        })
    }
}