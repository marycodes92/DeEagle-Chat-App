import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { user } from '@fortawesome/free-regular-svg-icons' 


const SideBar = () => {
    return (
        <div className="bg-blue-500 h-screen w-72 rounded-3xl">
            <div className="">
                <ul className="p-20">
                    <li>
                        {/* <FontAwesomeIcon icon={user}/> */}
                        <i class="far fa-user"></i>
                        <Link to="/ProfilePage">My Profile</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar
