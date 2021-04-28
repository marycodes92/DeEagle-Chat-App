import React from 'react'

const Pagefooter = (props) => {
    const date = new Date().getFullYear()
    
    return (
        <div className='flex flex-1 text-bold bg-gray-50'>
            <div className='flex-1 pl-32'>Copyright DeEagle {date}</div>
            <div className="align-right pr-32">Terms & Conditions . Privacy Policy</div>
        </div>
    )
}

export default Pagefooter;
