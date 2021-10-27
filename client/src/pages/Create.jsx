import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import Navbar from '../components/Navbar'
import { createProduct } from '../store/actions/actionProduct'

export default function Create() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [stock, setStock] = useState("")
    const [type, setType] = useState("")

    function handleCreate(e) {
        e.preventDefault()
        dispatch(createProduct({name, description, imgUrl, stock, type}, history))
    }

    return (
        <>
            <Navbar />
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 mt-3 card">
                        <div className="p-3">
                            <h1><b>Create Product</b></h1><hr />
                            <form onSubmit={handleCreate}>
                                <div className="form-group mt-4">
                                    <label htmlFor="exampleInputEmail1"><b>Name</b></label>
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Enter Name" />
                                </div>
                                <div className="form-group mt-4">
                                    <label htmlFor="exampleInputEmail1"><b>Description</b></label>
                                    <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className="form-control" placeholder="Enter Description" />
                                </div>
                                <div className="form-group mt-4">
                                    <label htmlFor="exampleInputEmail1"><b>Image Url</b></label>
                                    <input value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} type="text" className="form-control" placeholder="Enter Image Url" />
                                </div>
                                <div className="form-group mt-4">
                                    <label htmlFor="exampleInputEmail1"><b>Stock</b></label>
                                    <input value={stock} onChange={(e) => setStock(e.target.value)} type="number" className="form-control" placeholder="Enter Stock" />
                                </div>
                                <div className="form-group mt-4">
                                    <label htmlFor="exampleInputPassword1"><b>Type</b></label>
                                    <input value={type} onChange={(e) => setType(e.target.value)} type="text" className="form-control" placeholder="Enter Type" />
                                </div>
                                <div className="text-center mt-5">
                                    <button type="submit" className="btn btn-outline-dark w-100">Submit</button>
                                </div><hr />
                            </form>

                        </div>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </>
    )
}
