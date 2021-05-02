import React from 'react'

const Individual = () => {
    return (
        <div className="bg-blue-400 h-38 m-20 p-2 flex rounded-3xl">
            <div className="m-10">
                <div className="rounded-full bg-white w-40 h-40 border-solid border-4"></div>
                <h1 className="p-4">Ariana Joyce Kalu</h1>
            </div>

            <div className="m-20 text-white">
                <h1>Ogechukwu Philips</h1>
                <input type="text" className="bg-transparent rounded-2xl w-48 m-10" placeholder="some text..."></input>
            </div>
        </div>
    )
}

export default Individual
