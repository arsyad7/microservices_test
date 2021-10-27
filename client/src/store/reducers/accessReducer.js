import { SET_CREATE, SET_UPDATE, SET_DELETE } from '../keys';

const initialState = {
    createAccess: false,
    updateAccess: false,
    deleteAccess: false,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_CREATE:
            return {...state, createAccess: action.payload }
        case SET_UPDATE:
            return {...state, updateAccess: action.payload }
        case SET_DELETE:
            return {...state, deleteAccess: action.payload }
        default:
            return state
    }
}