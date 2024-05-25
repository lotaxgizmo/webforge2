import React from 'react'
import arrowstand from "../assets/arrowstand.svg"

function Standout() {
    return (
        <div className='flex flex-col justify-centers p-4'>
            <div className="HERE lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center align-middle ">
                <div className="text">
                    <h2 className='text-6xl lg:text-[90px] text-white font-normal mb-4 mt-1 '>HERE’S WHY WE</h2>
                    <h2 className='text-6xl lg:text-[90px] text-white font-normal mb-4 mt-1 '>STAND OUT:</h2>
                </div>
                <img src={arrowstand} alt="" className='animate-spin lg:mr-32' />
            </div>

            <div className="downtext flex flex-col lg:flex-row  lg:items-end justify-center ">
                <p className=' hidden lg:flex text-3xl text-white font-light w-72 lg:mb-32 mb-14'>
                </p>
                <p className='text-3xl text-white font-light lg:w-72 lg:mb-32w mb-5 mt-14 lg:mt-0'>
                    With a team deeply embedded in the blockchain and crypto industry.
                </p>
                <p className='lg:text-xl text-3xl  text-white font-light lg:w-72 lg:mb-32w mb-14 lg:ml-20'>
                Revolutionalize your project with our state of the art team
                </p>
            </div>

        </div>
    )
}

export default Standout