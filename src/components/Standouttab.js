import React from 'react'
import customized from "../assets/customized.svg"
import expertise from "../assets/expertise.svg"
import inovative from "../assets/inovative.svg"
import strategic from "../assets/strategic.svg"

function Standouttab() {
  return (
    <div className='flex flex-col lg:flex-row justify-between p-4 lg:px-20 mb-20'>
        <img src={customized} alt="" className='my-3' />
        <img src={expertise} alt="" className='my-3' />
        <img src={inovative} alt="" className='my-3' />
        <img src={strategic} alt="" className='my-3' />
    </div>
  )
}

export default Standouttab