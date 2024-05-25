import React from 'react'
import atlas from "../assets/atlas.svg"
import equalizer from "../assets/equalizer.svg"
import funtico from "../assets/funtico.svg"
import solius from "../assets/solius.svg"
import tokero from "../assets/tokero.svg"
import towercoin from "../assets/towercoin.svg"
import tokero2 from "../assets/tokero2.svg"
import funtico2 from "../assets/funtico2.svg"

function Clients() {
  return (
    <div className='flex flex-col px-4 lg:px-20 justify-center items-center mb-32'>
      <h2 className='text-6xl lg:text-[90px] text-white font-normal mb-10 mt-1 self-start '>OUR CLIENTS</h2>

      <div className="cliro1 flex flex-col lg:flex-row dborder-2 justify-center items-center">
        <img src={tokero} alt="" className='m-2 lg:flex hidden' />
        <img src={tokero2} alt="" className='m-2 flex lg:hidden' />
        <div className="inner flex flex-col lg:flex-row ">
          <img src={towercoin} alt="" className='m-2' />
          <img src={atlas} alt="" className='m-2' />
        </div>
      </div>

      
      <div className="cliro1 flex flex-col lg:flex-row dborder-2 justify-center items-center">
        <div className="inner flex flex-col lg:flex-row ">
          <img src={equalizer} alt="" className='m-2' />
          <img src={solius} alt="" className='m-2' />
        </div>
        <img src={funtico} alt="" className='m-2 lg:flex hidden' />
        <img src={funtico2} alt="" className='m-2 flex lg:hidden' />
      </div>


    </div>
  )
}

export default Clients