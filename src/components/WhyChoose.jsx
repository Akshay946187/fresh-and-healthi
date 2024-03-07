import React from 'react'
import { FaBus } from 'react-icons/fa'

const WhyChoose = () => {
  return (
    <>
     <div className="py-16 bg-gray-100">
        <div data-aos="fade-up" className="container">
            <h1 className='text-center pb-16 text-xl sm:text-2xl font-bold'>Why Choose Us</h1>

            {/* cardsection */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className='flex flex-col items-center justify-center text-center gap-2 px-2'>
                    <p className='text-dark/70 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    <p className='text-5xl rotate-90 text-primery text-center'>....</p>
                    <FaBus className='text-5xl text-primery -translate-x-4'/>
                </div>
                <div className='flex flex-col items-center justify-center text-center gap-2 px-2'>
                <FaBus className='text-5xl text-secondary -translate-x-4'/>
                <p className='text-5xl rotate-90 text-secondary text-center'>....</p>
                    <p className='text-dark/70 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  
                   
                </div>
                <div className='flex flex-col items-center justify-center text-center gap-2 px-2'>
                    <p className='text-dark/70 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <p className='text-5xl rotate-90 text-primery text-center'>....</p>
                    <FaBus className='text-5xl text-primery -translate-x-4'/>
                </div>
                <div className='flex flex-col items-center justify-center text-center gap-2 px-2'>
                <FaBus className='text-5xl text-secondary -translate-x-4'/>
                <p className='text-5xl rotate-90 text-secondary text-center'>....</p>
                   
                    <p className='text-dark/70 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  
                </div>

            </div>
        </div>
        </div> 
    </>
  )
}

export default WhyChoose
