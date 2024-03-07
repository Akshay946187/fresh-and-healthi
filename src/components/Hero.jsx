import React from 'react'
import img from '../assets/hero.png'
import PrimeButton from './assest/PrimeButton'
import bgImg from '../assets/heroBg.png'

const bg = {
  background: 'antiquewhite',
  backgroundRepeat:'no-repeat',
  backgroundPosition:'center',
  backgroundSize: 'contain',
  width:'100%',
  height:'auto',
  padding: 0,
  margin: 0, 
};

const Hero = () => {
 
  return (
    <div style={bg} className='relative  z-[-1] '>
      <div className="container py-16 sm:py-0 mx-auto">
        <div className='grid grid-cols-1 sm:grid-cols-2 items-center min-h-[600px]'>
        {/* textcontent */}

        <div className='space-y-3 order-2 sm:order-1'>
          <h1 data-aos="fade-up" className='text-2xl sm:text-5xl font-bold'>Fresh & healthy Meal Plan <span className='text-2xl sm:text-5xl font-serif text-secondary'>Delivery </span>in Miami</h1>
          <p data-aos="fade-up" data-aos-delay="300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum odio corporis blanditiis eum.</p>
          <div data-aos="fade-up" data-aos-delay="500">
          <PrimeButton  contant="Choose Your Meal Plan"/>
          </div>
        </div>
        {/* imagecontant */}
        <div data-aos="fade-left" className='order-1 sm:order-2'>
          <img src={img} alt="" className='w-full sm:scale-105 md:scale-110' />
        </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
