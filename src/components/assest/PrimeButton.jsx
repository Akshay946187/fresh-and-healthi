import React from 'react'
import {FaArrowRight} from 'react-icons/fa'

const PrimeButton = ({contant}) => {
  return (
    <div className='flex items-center group'>
      <button 
      className='bg-primery text-white px-3 py-1 hover:scale-105 duration-200 h-[35px]'
      >{contant}</button>
      <FaArrowRight className='bg-primaryDark px-2 py-1 text-white group-hover:translate-x-2 h-[35px] w-[35px] duration-200' />

    </div>
  )
}

export default PrimeButton
