import React from 'react'
import Select from 'react-dropdown-select'
import DateOfBirth from './date'
// import SideBar from './SideBar'

const EditProfile = ({options}) => {
    const values = [ "country" ];
    return (
        <div className="bg-white md:absolute inset-y-24 right-0 left-72 bottom-0 m-2">
            <div className="container pl-20">
                <div className="pl-44 pt-12">
                    <div className="rounded-full bg-white w-40 h-40 border-solid border-4 border-blue-900"></div>
                </div>

                <form className="m-12 md:w-48">
                    <div className='md:flex'>
                        <div className="">
                            <label>First Name </label>
                            <input type="text" className="" placeholder="First Name"></input>
                        </div>

                        <div className="pl-14">
                            <label>Last Name </label>
                            <input type="text" className="" placeholder="Last Name"></input>
                        </div>
                    </div>

                    <div className="">
                        <label>Email Address </label>
                        <input type="email" className="w-96" placeholder="Email"></input>
                    </div>
                    
                    <label> Date of Birth </label>
                    <DateOfBirth />
                        
                    <label> LGA of Origin
                        <Select options={options} 
                            onChange={values => this.setValues()}/>
                    </label>
                    <label> State of Origin
                        <Select options={options} 
                            onChange={values => this.setValues()}/>
                    </label>
                    <label> Country
                        <Select options={options} 
                            onChange={values => this.setValues()}/>
                    </label>
                </form>
            </div>
        </div>
    )
}

export default EditProfile
