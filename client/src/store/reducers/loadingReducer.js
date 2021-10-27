import { SET_LOADING } from '../keys';

const initialState = {
    isLoading: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOADING:
            return {...state, isLoading: action.payload }
        default:
            return state
    }
}