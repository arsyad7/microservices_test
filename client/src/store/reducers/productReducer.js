import { SET_PRODUCTS } from '../keys';

const initialState = {
    products: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return {...state, products: action.payload }
        default:
            return state
    }
}