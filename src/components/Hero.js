import React from 'react' 
import herotext from "../assets/herotext.svg"

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center lg:my-14 mt-14 mb-14 p-4 lg:p-0 relative '>
        <img src={herotext} alt="" className='' />
        <p className='text-xl text-center text-white font-light dw-72 lg:mb-322 flex lg:hidden'>
                        Revolutionalize your crypto Trading with our Defi Swap Platform High Value Locked
                    </p> 
        <p className=' text-xl text-right text-white font-light w-72 lg:mb-322 lg:flex hidden absolute self-start left-[20%]'>
                        Revolutionalize your crypto Trading with our Defi Swap Platform High Value Locked
                    </p> 
    </div>
  )
}

export default Hero