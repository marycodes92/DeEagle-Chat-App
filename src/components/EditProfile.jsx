import React from 'react'
import Select from 'react-dropdown-select'
import DateOfBirth from './date'
// import SideBar from './SideBar'

const EditProfile = ({options}) => {
    // const values = [ "country" ];
    return (
        <div className="bg-white md:absolute inset-y-24 right-0 left-72 bottom-0 m-2">
            <div className="container pl-10">
                <div className="pl-10 pt-4">
                    <div className="rounded-full bg-white w-32 h-32 border-solid border-4 border-blue-900"></div>
                </div>

                <form className="m-8 md:w-48">
                    <div className='md:flex m-4'>
                        <div className="">
                            <label>First Name </label>
                            <input type="text" className="" placeholder="First Name"></input>
                        </div>

                        <div className="pl-14">
                            <label>Last Name </label>
                            <input type="text" className="" placeholder="Last Name"></input>
                        </div>
                    </div>

                    <div className="m-4">
                        <label>Email Address </label>
                        <input type="email" className="w-96" placeholder="Email"></input>
                    </div>
                    
                    <div className="m-4">
                        <label>Phone Number </label>
                        <input type="email" className="w-96" placeholder="08076543298"></input>
                    </div>
                    
                    <div className="m-4">
                        <label> Date of Birth </label>
                        <DateOfBirth />
                    </div>
                        
                    <div className="md:flex m-4">
                        <label> City
                            <Select options={options} 
                             onChange={values => this.setValues()}/>
                        </label>

                        <label className="pl-14"> State of Origin
                            <Select options={options} 
                                onChange={values => this.setValues()}/>
                        </label>

                        <label className="pl-14"> Country
                            <Select options={options} 
                                onChange={values => this.setValues()}/>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProfile;
