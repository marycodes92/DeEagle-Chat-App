import React from 'react'

const Individual = () => {
    const date = new Date()
    return (
        <div className="bg-blue-400 h-38 m-36 p-2 md:flex rounded-3xl">
            <div className="m-10">
                <div className="rounded-full bg-white w-24 h-24 border-solid border-4"></div>
            </div>

            <div className="md:flex-1 text-white m-12">
                <div className="text-2xl">
                    <h1>Ogechukwu Philips</h1>
                </div>
                <div className="pt-4">
                    <p>Please i want to see you today, remember 
                        what i told you about our meeting
                    </p>
                </div>
            </div>

            <div className="m-14">
                <div>
                    <p>Time</p>
                </div>
                <div>
                    <div className="w-6 h-6 rounded-full bg-white m-3">
                        <h6 className="m-2">2</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Individual
