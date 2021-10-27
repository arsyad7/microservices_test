import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login, setCreate, setDelete, setUpdate, setUser } from '../store/actions/actionUser';

export default function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();

        dispatch(login({ email, password }))
            .then(resp => {
                const accesses = resp.data.access_type.split(',')
                accesses.forEach(e => {
                    if (e === 'create') {
                        dispatch(setCreate(true))
                    } else if (e === 'update') {
                        dispatch(setUpdate(true))
                    } else if (e === 'delete') {
                        dispatch(setDelete(true))
                    }
                });

                dispatch(setUser(resp.data))

                localStorage.setItem("access_token", resp.data.access_token)
                history.push('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 mt-5 card">
                        <div className="p-3">
                            <h1><b>Login</b></h1><hr />
                            <form onSubmit={handleLogin}>
                                <div className="form-group mt-4">
                                <label htmlFor="exampleInputEmail1"><b>Email address</b></label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group mt-4">
                                <label htmlFor="exampleInputPassword1"><b>Password</b></label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div className="text-center mt-5">
                                    <button type="submit" className="btn btn-outline-dark w-100">Submit</button>
                                </div><hr />
                                <div className="mt-4 text-center">
                                    <p>Don't have an account?</p>
                                    <Link to="">register</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </>
    )
}
