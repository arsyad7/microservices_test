import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'

export default function EditProduct() {
    const { id } = useParams();
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [stock, setStock] = useState("")
    const [type, setType] = useState("")
    console.log(id);
    const { products } = useSelector(state => state.productReducer)

    useEffect(() => {
        const product = products.filter(e => e.id === +id)
        console.log(product[0]);
        setName(products[0].name)
        setDescription(products[0].description)
        setImgUrl(products[0].imgUrl)
        setStock(products[0].stock)
        setType(products[0].type)
    }, [])

    return (
        <>
            <Navbar />
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 mt-3 card">
                        <div className="p-3">
                            <h1><b>Edit Product</b></h1><hr />
                            <form>
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
