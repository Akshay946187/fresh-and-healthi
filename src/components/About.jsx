import React from 'react'
import img from '../assets/polygon.png'
import vecter from '../assets/vector-wave.png'
import { FaUser } from 'react-icons/fa'

const About = () => {
    const bgstyle = {
        background: `url(${img})`,
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-Repeat'
    }
    return (
        <div style={bgstyle} className='py-14 relative'>
            <div data-aos="fade-up" className="container min-h-[500px]  z-40">
                <h1 className='pt-16 tracking-wide text-4xl font-semibold text-white text-center'>About Us</h1>
                <div className='bg-white/80 p-10 my-6 tracking-wider flex flex-col justify-center items-center font-semibold'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos omnis rerum adipisci, error architecto consequatur laborum ut! Dignissimos incidunt repellendus maiores facere eaque tenetur quas harum hic, error inventore a. Voluptatibus quis laboriosam explicabo ipsum quaerat, veritatis possimus earum dolores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos omnis rerum adipisci, error architecto consequatur laborum ut! Dignissimos incidunt repellendus maiores facere eaque tenetur quas harum hic, error inventore a. Voluptatibus quis laboriosam explicabo ipsum quaerat, veritatis possimus earum dolores.
                    <div>
                    <button className='flex items-center justify-center gap-2 bg-secondary  h-[40px] px-4 py-1 hover:scale-105 duration-300 text-white my-4'>
                        <FaUser />
                        My Account
                    </button>
                </div>
                </div>
                
            </div>
            {/* vecterImage */}
            <div className='w-full top-0 right-0 absolute'>
                <img src={vecter} alt=""  className='mx-auto'/>
            </div>
        </div>
    )
}

export default About
