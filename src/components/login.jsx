import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <React.Fragment>
        <Navbar />
        <div className="App bg-gray-50 h-screen">
            <div className="form h-full flex justify-center flex flex-wrap content-center">
                
                <div className="bg-gray-200 w-96 p-4">
                <h1 className="text-center text-3xl text-extrabold text-gray-900">Login in to your account</h1>
                    <div>
                        <span className="text-blue-900 items-center justify-center text-center">Username:
                            <input type="text" className="px-5 py-2 rounded-full m-2 text-black items-center justify-center text-center" name="username" placeholder="Username"></input>
                        </span>
                    </div>

                    <div>
                        <span className="text-blue-900 items-center justify-center text-center">Password:
                            <input className="form-input px-5 py-2 rounded-full m-2 text-black items-center justify-center text-center" type='password' name="password" placeholder="Password"></input>
                        </span>
                    </div>

                    <div className="">
                        <div className="text-white items-center justify-center text-center">
                            <button className="bg-green-500 rounded-full h-15 w-80 h-10 rounded-full m-3 box-border">
                                <Link to="/profilepage">Login</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Login;