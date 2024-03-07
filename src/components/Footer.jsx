import React from 'react'
import {IoLocationSharp } from 'react-icons/io5'
import { FaPhone } from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const Footer = () => {
  return (
    <div data-aos="fade-up" className='my-16 text-center text-white  bg-gradient-to-b from-primery to-primaryDark  rounded-t-3xl p-8 w-[90%] mx-auto mb-0'>
        <h1 className='text-xl sm:text-3xl font-bold mb-4 py-6'>Contact Us</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 sm:gap-10 border-b-2 border-white pb-6">
            <div className='flex flex-col items-center justify-center gap-2'>
                <IoLocationSharp className='text-5xl'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, beatae.</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
                <FaPhone className='text-5xl'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, beatae.</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
                <MdEmail className='text-5xl'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, beatae.</p>
            </div>

        </div>
        <div className='py-4'>
            <p>@2023 TCJ. All Right Reserved</p>
        </div>
      
    </div>
  )
}

export default Footer
