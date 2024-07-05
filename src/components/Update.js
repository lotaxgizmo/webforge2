import React from 'react'
import telegram from "../assets/telegram.svg"
import twitter from "../assets/twitter.svg"

function Update() {
    return (
        <div className='flex justify-center items-center lg:px-32 px-4 mb-10 lg:mb-32'>
            <div className="box border-[0.5px] border-[#02D5FF] w-full rounded-3xl p-8 flex flex-col lg:flex-row bg-black/40 backdrop-blur-lg ">
                <div className="le lg:w-1/2">
                    <h2 className='text-6xl lg:text-[90px] text-white font-normal mb-1 lg:mb-10s mt-1 self-start '>CONTACT US</h2>
                    <h2 className='text-4xl lg:text-4xl text-white font-light mb-1 lg:mb-10  mtz self-start '>Let's talk</h2>
                </div>

                <div className="divided flex flex-col items-start justify-center lg:w-1/2  ">
                    <p className='text-2xl text-white font-light lg:mb-32w mb-5 mt-3 lg:mt-0 lg:mr-10'>
                        Reach out to us today and let’s start shaping the future of Web3 together.
                    </p>
                    <p className='text-2xl text-white font-light lg:mb-32w mb-5 mt-3 lg:mt-0 lg:mr-10'>
                        t: +447947227483
                        <br />
                        e: contact@web3forge.studio
                        <br />
                        a: 6-8 Great Eastern Street, London, United Kingdom, EC2A 3NT
                    </p>

                    <div className="btns flex flex-col lg:flex-row">
                        <a href="https://t.me/benlightened3" target="_blank" rel="noopener noreferrer">
                            <img src={telegram} alt="" className='mb-4 lg:mr-4' />
                        </a>
                        <a href="https://x.com/bogdan_deliu?s=21&t=UpWUFwTcyTD5t8btc2s3NA" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="" className='mb-4 lg:mr-4' />
                        </a>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Update