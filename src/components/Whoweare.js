import React from 'react'

function Whoweare() {
  return (
    <div className='flex flex-col justify-center items-center px-4 lg:px-20 mb-32'>
      <h2 className='text-6xl lg:text-[90px] text-white font-normal mb-10 mt-1 self-end text-right'>WHO WE ARE</h2>


      <div className="box border-[0.5px] border-[#02D5FF] w-full rounded-3xl p-8 flex flex-col bg-black/40 backdrop-blur-lg ">
        <p className='text-3xl text-white font-medium  lg:mb-32w lg:mb-5 lg:mt-0'>
          We are a  team of innovators, thinkers, and creators united by a shared passion  for the transformative power of blockchain technology.
        </p>
        

        <div className="divided flex lg:flex-row flex-col">
        <p className='text-2xl text-white font-normal lg:w-2/12 lg:mb-32w mb-5 mt-3 lg:mt-0 lg:mr-10'>
        We are the decisive factor behind your success
        </p>
        <p className='text-xl text-white font-light  lg:mb-32w mb-5  lg:mt-0 lg:w-9/12'>
        With diverse backgrounds in software development, digital  marketing, financial advisory, and blockchain technology, we bring a  multidimensional perspective to every project we undertake. Our mission  is to empower businesses and entrepreneurs by unlocking the potential of  Web3, delivering solutions that are not only technologically advanced  but also strategically designed to drive growth and success in the  digital age.
        <br />
        <br />
        In a rapidly evolving digital landscape, we stand ready to guide you through the complexities of Web3, ensuring that your project not only thrives but sets new standards of excellence in the blockchain space.
        </p>

        </div>
      </div>
    </div>
  )
}

export default Whoweare