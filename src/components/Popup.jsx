import React from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5'

const Popup = ({popup,setpopup}) => {
  return (
   <>
{
    popup && (
        <div>
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md duration-200 w-[300px]'>
                {/* headersection */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className='text-2xl font-bold text-dark'>Login</h1>
                    </div>
                    <div>
                        <IoCloseOutline className='text-2xl cursor-pointer' onClick={()=>setpopup(false)}/>
                    </div>

                </div>
                {/* loginFormsection */}
                <div className='mt-4'>
                    <input type="email"
                    placeholder='Enter Email'
                    className='w-full rounded-md border border-gray-300 px-2 py-1 mb-4'
                    />
                       <input type="email"
                    placeholder='Enter Passward'
                    className='w-full rounded-md border border-gray-300 px-2 py-1 mb-4'
                    />
                    {/* loginButton */}
                    <div className='flex items-center justify-center '>
                    <button className='bg-primery w-full text-white px-2 py-1 rounded-md'>Login</button>
                    </div>
                    {/* socialLogin */}
                    <div className='mt-4'>
                        <p className='text-center'>Or Login With</p>
                        <div className='flex items-center justify-center gap-3 mt-2'>
                            <FaFacebook className='text-3xl text-blue-500 hover:text-blue-800 duration-200'/>
                            <FaGoogle className= 'text-3xl hover:text-primaryDark text-primery duration-200'/>
                        </div>

                    </div>

                </div>

            </div>
  
        </div>
      </div>
    )
}
   </>
  )
}

export default Popup
