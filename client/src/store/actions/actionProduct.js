import axios from "axios";
import { SET_ERRORS, SET_PRODUCTS } from "../keys";

const key = 'kunci';

export function setProduct(data) {
    return {
        type: SET_PRODUCTS,
        payload: data
    }
}

export function setErrors(err) {
    return {
        type: SET_ERRORS,
        payload: err
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
            .catch(err => console.log(err.response.data))
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
            .catch(err => {
                console.log(err.response.data)
                dispatch(setErrors(err.response.data))
            })
    }
}

export function deleteProduct(id, history) {
    return function (dispatch, getState) {
        const { productReducer } = getState()

        axios.delete(`http://localhost:4000/products/${id}`, {
            headers: { key }
        })
            .then(() => {
                const newProducts = productReducer.products.filter( e => e.id !== +id )
                dispatch(setProduct(newProducts))
                history.go('/')
            })
            .catch(err => console.log(err.response.data))
    }
}

export function editProduct(payload, id, history) {
    return function (dispatch, getState) {
        const { productReducer } = getState()

        axios.put(`http://localhost:4000/products/${id}`, payload, {
            headers: { key }
        })
            .then(({ data }) => {
                const newProducts = productReducer.products.map( e => {
                    if(e.id === +id) {
                        return data
                    } else {
                        return e
                    }
                })
                dispatch(setProduct(newProducts))
                history.goBack()
            })
            .catch(err => console.log(err.response.data))
    }
}