import React from 'react'
import telegram from "../assets/telegram.svg"
import twitter from "../assets/twitter.svg"

function Update() {
    return (
        <div className='flex justify-center items-center lg:px-32 px-4 mb-32'>
            <div className="box border-[0.5px] border-[#02D5FF] w-full rounded-3xl p-8 flex flex-col lg:flex-row  ">
                <div className="le lg:w-1/2">
                <h2 className='text-6xl lg:text-[90px] text-white font-normal mb-1 lg:mb-10 mt-1 self-start '>FOLLOW
                    OUR UPDATES</h2>
                </div>

                <div className="divided flex flex-col items-start justify-center lg:w-1/2  ">
                    <p className='text-2xl text-white font-light lg:mb-32w mb-5 mt-3 lg:mt-0 lg:mr-10'>
                    Revolutionalize your crypto Trading with our Defi Swap Platform High Value Locked
                    </p>

<div className="btns flex flex-col lg:flex-row">
                    <img src={telegram} alt="" className='mb-4 lg:mr-4'/>
                    <img src={twitter} alt="" className='mb-4 lg:mr-4'/>
</div>
    

                </div>
            </div>
        </div>
    )
}

export default Update