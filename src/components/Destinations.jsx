import React from 'react'
import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import KeyWest from '../assets/keywest.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-32 px-4'>
        <h1 className='text-slate-800'>All-Inclusive Resorts</h1>
        <p className='text-slate-600 py-2'>On the Caribbean's Best Beaches</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='rounded-sm object-cover h-full w-full col-span-2 md:col-span-3 row-span-2' src={BoraBora} alt="/" />
            <img className='rounded-sm object-cover h-full w-full ' src={BoraBora2} alt="/" />
            <img className='rounded-sm object-cover h-full w-full ' src={Maldives} alt="/" />
            <img className='rounded-sm object-cover h-full w-full ' src={Maldives2} alt="/" />
            <img className='rounded-sm object-cover h-full w-full ' src={KeyWest} alt="/" />
        </div>
    </div>
  )
}

export default Destinations