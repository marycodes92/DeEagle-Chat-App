import React from 'react'

const Pagefooter = (props) => {
    const date = new Date().getFullYear()
    
    return (
        <div className='sm:flex flex-1 text-bold pt-4'>
            <div className='flex-1 pl-32 font-bold'>Copyright DeEagle {date}</div>
            <div className="align-right pr-32 font-bold">Terms & Conditions . Privacy Policy</div>
        </div>
    )
}

export default Pagefooter;
