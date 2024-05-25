import React from 'react'
import herotext from "../assets/herotext.svg"

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center my-20 p-3 lg:p-0'>
        <img src={herotext} alt="" className='' />
    </div>
  )
}

export default Hero