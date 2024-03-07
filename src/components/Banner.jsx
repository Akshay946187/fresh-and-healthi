import React from 'react'
import PrimeButton from './assest/PrimeButton'
import leaf from '../assets/png/leaf.png'
import apple from '../assets/png/apple.png'
import kiwi from '../assets/png/kiwi.png'
import lemon from '../assets/png/lemon.png'
import tomato from '../assets/png/tomato.png'

const Banner = () => {
  return (
    <div data-aos="fade-up" className='container relative'>
      <div className='text-center py-8'>
        <h1 className='text-xl font-bold sm:text-2xl md:text-3xl'>Taste the Healthy Diffrence</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-6">
        {/* contantsection */}
        <div>
            <p className='font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates quas cumque sed neque quidem. A minus dolore ex, consequuntur, fugit error asperiores obcaecati dolorem libero est deserunt nobis architecto hic.</p>
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-6">
        <div></div>
        {/* contantsection */}
        <div>
            <p className='font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex laborum nisi doloribus nihil. Non aliquam aut dignissimos enim repellat esse et accusamus. Ratione nostrum veritatis nisi expedita, facere quod enim.</p>
        </div>
      </div>
      <div className='flex justify-center my-5'>
        <PrimeButton contant="Choose your Meal"/>
      </div>

      {/* imagessection */}
      <div className='absolute top-4 -left-16 md:-left-6 opacity-50 sm:opacity-100'>
            <img src={leaf} alt="" className='max-w-[160px]'/>
      </div>
      <div className='absolute bottom-4 -left-16 md:-left-2 opacity-50 sm:opacity-100'>
            <img src={tomato} alt="" className='max-w-[160px]'/>
      </div>
      <div className='absolute top-4 -right-16 md:right-0 opacity-50 sm:opacity-100'>
            <img src={lemon} alt="" className='max-w-[200px]'/>
      </div>
      <div className='absolute -bottom-8 -right-16 md:-right-2 opacity-50 sm:opacity-100'>
            <img src={apple} alt="" className='max-w-[160px]'/>
      </div>
      <div className='absolute sm:top-1/2 -translate-y-1/5 left-1/4 md:left-1/3 opacity-50 sm:opacity-100'>
            <img src={kiwi} alt="" className='max-w-[160px]'/>
      </div>

    </div>
  )
}

export default Banner
