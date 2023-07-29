import React from "react";
import { Link } from 'react-router-dom'
import './style.css'

function Login() {
    return (
        <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
            <div className="form_container p-5 rounded bg-white">
                <form>
                    <h3 className="text-center">Sign in</h3>
                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter email" className="form-control" />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter password" className="form-control" />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="check" className="custom-control custom-checkbox">
                            <input type="checkbox" id="check" />
                            Remember me
                        </label>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary">Sign in</button>
                    </div>
                    <p className="text-end mt-2">
                        Forget <a href="">Password</a><Link to="/signup" className="ms-2">Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
