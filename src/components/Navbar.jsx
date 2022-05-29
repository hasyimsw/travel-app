import React, { useState } from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {FaFacebook, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
    }

  return (
    <div className='flex w-full justify-between items-center h-20 z-10 text-white absolute px-4'>
        <div>
            <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>BEACHES.</h1>
        </div>
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
        </ul>
        <div className='hidden md:flex'>
            <BiSearch size={24} className='mr-2' />
            <BsPerson size={24} />
        </div>

        {/* hamburger menu */}
        <div onClick={handleNav} className='md:hidden cursor-pointer z-10'>
            {nav ? <AiOutlineClose className='text-black' size={24} /> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>} 
            
        </div>

        {/* Navbar Mobile dropdown */}
        <div onClick={handleNav} className={nav ? 'absolute text-slate-800 left-0 top-0 w-full bg-white px-4 py-5 flex flex-col transition-all duration-700' : 'absolute left-[-100%]'}>
            <ul>
                <h1 className='text-slate-800 mb-5'>BEACHES.</h1>
                <li className='border-b border-slate-300'>Home</li>
                <li className='border-b border-slate-300'>Destinations</li>
                <li className='border-b border-slate-300'>Travel</li>
                <li className='border-b border-slate-300'>View</li>
                <li className='border-b border-slate-300'>Book</li>
                <div className='flex flex-col space-y-3 my-10'>
                    <button>Seacrh</button>
                    <button>Account</button>
                </div>
                <div className='flex space-x-4'>
                    <FaFacebook className='icon' />
                    <FaTwitter className='icon' />
                    <FaInstagram className='icon' />
                    <FaYoutube className='icon' />
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Navbar