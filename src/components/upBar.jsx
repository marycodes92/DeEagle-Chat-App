import React from 'react'

import { bell } from '@fortawesome/free-regular-svg-icons'

const UpBar = () => {
    return (
        <div className="sm:bg-white absolute inset-x-72 top-0 right-0 m-1 h-30">
            <div className="sm:flex m-2">
                <div className="flex-1">
                    <h1 className="m-6 text-2xl">My Profile</h1>
                </div>

                <div className="sm:flex m-2">
                    <i className="far fa-bell m-4">Notifications</i>
                    <div className="rounded-full bg-white w-14 h-14 border-solid 
                        border-4 border-blue-900"></div>
                    <i className="m-4">Arrow-down</i>
                </div>
            </div>
        </div>
    )
}

export default UpBar
