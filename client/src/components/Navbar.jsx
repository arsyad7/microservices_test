import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { setCreate, setDelete, setUpdate } from '../store/actions/actionUser';
// import { setUserEmail, setUserId } from '../store/actions/actionUser';

export default function Navbar() {
    const dispatch = useDispatch();
    const { createAccess } = useSelector(state => state.accessReducer)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <h3>Home</h3>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        {
                            createAccess || localStorage.getItem('create') ? <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/create">Create Product</Link>
                                </li> : null
                        }
                        <li className="nav-item">
                            <Link onClick={() => {
                                dispatch(setCreate(false))
                                dispatch(setUpdate(false))
                                dispatch(setDelete(false))
                                localStorage.clear()
                            }} className="nav-link" to="/login">Sign Out</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
