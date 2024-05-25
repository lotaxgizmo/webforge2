import React from 'react'
import herotext from "../assets/herotext.svg"
import herotextmobile from "../assets/herotextmobile.svg"
import star from "../assets/star.svg"

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center lg:my-14 mt-14 mb-14 p-4 lg:p-0 relative '>
      <img src={herotext} alt="" className='lg:hidden flex' />
      <div className="hidden lg:flex relative">
      <img src={herotextmobile} alt="" className='' />
      <img src={star} alt="" className='absolute -left-36 spin' />
      </div>
      <p className='text-xl text-center text-white font-light dw-72 lg:mb-322 flex lg:hidden'>
        Revolutionalize your crypto Trading with our Defi Swap Platform High Value Locked
      </p>
      <p className=' text-xl text-right text-white font-light w-72 lg:mb-322 lg:flex hidden absolute self-start left-[15%]'>
        Revolutionalize your crypto Trading with our Defi Swap Platform High Value Locked
      </p>
    </div>
  )
}

export default Hero