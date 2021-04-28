import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () =>{
    return (
        <nav className="flex w-full bg-blue-500 h-14">
            <div className="flex flex-1 m-3 text-white">
                <div className="flex-1">
                    <Link to="/">Logo</Link>
                </div>
                <div className="">
                    <Link to="/profile" className="m-3">Profile</Link>
                    <Link to="/chats" className="m-3">Chats</Link>
                    <Link to="/logout" className="m-3">Log Out</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav
