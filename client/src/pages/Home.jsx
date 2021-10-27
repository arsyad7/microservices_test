import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';

import Navbar from '../components/Navbar'
import { deleteProduct, getProducts } from '../store/actions/actionProduct'

export default function Home() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { products } = useSelector(state => state.productReducer)
    const { updateAccess, deleteAccess } = useSelector(state => state.accessReducer)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    
    function handleDelete(id) {
        dispatch(deleteProduct(id))
    }

    return (
        <>
            <Navbar />

            <h1>INI HOME</h1>
            <div className={"container mb-5"}>
                { 
                    (
                        <table className="table table-hover mt-5">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((product, i) => {
                                        return (
                                            <tr key={product.id}>
                                                <th scope="row">{i + 1}</th>
                                                <td><img src={product.imgUrl} alt="" width="100" height="100" /></td>
                                                <td>{product.name}</td>
                                                <td>{product.description}</td>
                                                <td>{product.stock}</td>
                                                <td>{product.type}</td>
                                                <td>
                                                    {
                                                        updateAccess ? <button onClick={() => history.push(`edit/${product.id}`)} type="button" className="btn btn-warning btn-block mr-5">Edit</button> : null
                                                    }
                                                    <p></p>
                                                    {
                                                        deleteAccess ? <button type="button" onClick={() => handleDelete(product.id)} className="btn btn-danger btn-block">Delete</button> : null
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    )
                }
                
            </div>
        </>
    )
}
