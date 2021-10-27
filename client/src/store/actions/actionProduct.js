import axios from "axios";
import { SET_PRODUCTS } from "../keys";

const key = 'kunci';

export function setProduct(data) {
    return {
        type: SET_PRODUCTS,
        payload: data
    }
}

export function getProducts() {
    return function (dispatch) {
        axios.get('http://localhost:4000/products', {
            headers: { key }
        })
            .then(({ data }) => {
                dispatch(setProduct(data))
            })
            .catch(err => console.log(err))
    }
}

export function createProduct(payload, history) {
    return function (dispatch, getState) {
        const { productReducer } = getState()

        axios.post('http://localhost:4000/products', payload, {
            headers: { key }
        })
            .then(({ data }) => {
                dispatch(setProduct(productReducer.products.concat(data)))
                history.push('/')
            })
            .catch(err => console.log(err))
    }
}

export function deleteProduct(id) {
    return function (dispatch, getState) {
        const { productReducer } = getState()

        axios.delete(`http://localhost:4000/products/${id}`, {
            headers: { key }
        })
            .then(() => {
                const newProducts = productReducer.products.filter( e => e.id !== +id )
                dispatch(setProduct(newProducts))
            })
            .catch(err => console.log(err))
    }
}