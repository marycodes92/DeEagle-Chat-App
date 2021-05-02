import React from 'react';
import Navbar from './Navbar';



const Help = ()=>{
    return(
        <>
            <Navbar/>
            <div>
                <p className="m-52 text-4xl text-center">
                    If you run into any issues, please contact our <span className="font-bold">Support Team</span> and we will try to help you as soon as possible.
                </p>
                <div className="w-auto m-10 h-1 bg-gray-200"></div>
            </div>
        </>
    )
}

export default Help;