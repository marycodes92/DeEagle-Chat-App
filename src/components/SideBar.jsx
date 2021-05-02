import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { user } from '@fortawesome/free-regular-svg-icons' 


const SideBar = () => {
    return (
        <div className="bg-blue-500 h-screen w-72 rounded-3xl">
            <div className="">
                <ul className="p-10 text-white text-xl">
                    <li className="pt-8">
                        {/* <FontAwesomeIcon icon={user}/> */}
                        <i class="far fa-user"></i>
                        <Link to="/ProfilePage">Edit Profile</Link>
                    </li>

                    <li className="pt-8">
                        <Link to="/chats">Chats</Link>
                    </li>

                    <li  className="pt-8">
                        <Link to="/ProfilePage">Notifications</Link>
                    </li>

                    <li  className="pt-8">
                        <Link to="/ProfilePage">Change Password</Link>
                    </li>

                    <li  className="pt-8">
                        <Link to="/logout">Sign Out</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar
