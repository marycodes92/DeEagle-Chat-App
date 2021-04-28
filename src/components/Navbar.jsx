import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="flex w-full bg-blue-500 h-14">
            <div className="flex flex-1 m-3 text-white">
                <div className="flex-1 pl-4">
                    <Link to="/">Logo</Link>
                </div>
                <div className="align-right">
                    <Link to="/signup" className="m-3">Sign-Up</Link>
                    <Link to="/login" className="m-3">Login</Link>
                    <Link to="/help" className="m-3">Help</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
