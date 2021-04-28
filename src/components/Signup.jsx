import React from 'react'
import Nav from './NavBar2'
import { Link } from 'react-router-dom'
import ValidateForm from './validateForm'
// import validation from './validation'

const Signup = () => {
    const { changeHandler, values, submitHandler } = ValidateForm();
    return (
        <>
            <Nav/>
            <div className="form-wrapper bg-gray-50 w-auto m-20 p-6">
                <form className="m-6 w-auto" onSubmit={submitHandler}>
                    <h2 className="text-center text-extrabold text-4xl">Enter your details to sign-up</h2>
                    <div className="form-inputs m-4">
                        <label htmlFor="username" className="block">Username</label>
                        <input id="username" type="text" name="username" className="form-input px-3 w-96" placeholder="enter username" 
                        value={values.username} onChange={changeHandler}></input>
                        {/* {errors.username && <p>{errors.username}</p>} */}
                    </div>

                    <div className="form-inputs m-4">
                        <label htmlFor="email" className="block">Email</label>
                        <input id="email" type="email" name="email" className="form-input px-3 w-96" placeholder="enter email" 
                        value={values.email} onChange={changeHandler}></input>
                    </div>

                    <div className="form-inputs m-4">
                        <label htmlFor="password" className="block">Password</label>
                        <input id="password" type="password" name="password" className="form-input px-3 w-96" placeholder="enter password"
                        value={values.password} onChange={changeHandler}></input>
                    </div>

                    <div className="form-inputs m-4">
                        <label htmlFor="password2" className="block">Confirm Password</label>
                        <input id="password2" type="password" name="password2" className="form-input px-3 w-96" placeholder="confirm password" 
                        value={values.password2} onChange={changeHandler}></input>
                    </div>

                    <button className="bg-blue-500 rounded-full w-32 h-8 m-4">Submit</button>
                    <span>Already have an account? 
                        <Link to="/login" className="p-1 sm:hover:text-blue-500">Login</Link>
                    </span>
                </form>
            </div>
        </>
    )
}

export default Signup
