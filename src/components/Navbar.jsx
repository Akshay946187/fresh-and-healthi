import React from 'react'
import {FaCaretDown, FaUser} from 'react-icons/fa'

const Navbar = ({showPopup}) => {
    const navlink = [
        {
            id: 1,
            Link: '#',
            name: 'Home'
        },
        {
            id: 2,
            Link: '#',
            name: 'About'
        },
        {
            id: 3,
            Link: '#',
            name: 'Contact'
        },
    ]
    const dropDown = [
        {
            id: 1,
            Link: '#',
            name: 'Services'
        },
        {
            id: 2,
            Link: '#',
            name: 'phone'
        },
        {
            id: 3,
            Link: '#',
            name: 'Order'
        },
    ]
    return (
        <div data-aos = "fade" className='w-full shadow-md py-4'>
            <nav className='container  flex items-center justify-between'>
                <div className='text-2xl sm:text-3xl font-bold'>Logo</div>
                <ul className='hidden sm:flex items-center justify-center gap-3'>
                    {
                        navlink.map(({ id, name, Link }) => (
                            <li key={id} className='hover:text-primery hover:border-b-2 border-primaryDark duration-300'><a href='Link'>{name}</a></li>
                        ))
                    }
                    {/* droapdown section  */}
                    <li className='hover:text-primery hover:border-b-2 border-primaryDark duration-300 cursor-pointer group relative'>
                       <div className='flex items-center gap-[2px]'>
                       Dropdon
                        <span>
                            <FaCaretDown
                            className='group-hover:rotate-180 duration-300'
                            />
                        </span>
                       </div>
                       {/* dropdownlinks */}
                       <ul className='absolute hidden group-hover:inline-block shadow-md duration-300 p-4 z-40 bg-white'>
                        {
                            dropDown.map(({name,id,Link})=>(
                                <li key={id} className='hover:bg-primery/10 hover:border-b-2 border-primaryDark duration-300'>{name}</li>
                            ))
                        }
                       </ul>
                    </li>
                    {/* buttonsection */}
                    <li>
                        <button onClick={showPopup} className='flex items-center justify-center gap-2 bg-secondary  h-[40px] px-4 py-1 hover:scale-105 duration-300 text-white'>
                            <FaUser/>
                            My Account
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
