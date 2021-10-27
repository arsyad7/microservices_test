import { SET_USER } from '../keys';

const initialState = {
    currentUser: {}
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {...state, currentUser: action.payload }
        default:
            return state
    }
}