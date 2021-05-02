import React from 'react'
import EditProfile from './EditProfile'
import SideBar from './SideBar'
import UpBar from './upBar'


const Profilesetup = () => {
    return (
        <React.Fragment>
            <div className="md:h-screen bg-blue-50">
                <div className="flex">
                    <div className="bg-blue-500">
                        <SideBar/>
                    </div>
                    
                    <div>
                        <div className="">
                            <UpBar/>
                        </div>
                        <div>
                            <EditProfile/>
                        </div>
                    </div>
                </div>
                
            </div>
        </React.Fragment>
    )
}

export default Profilesetup;
