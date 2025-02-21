import React from 'react'
import FullStack from '../../FullStack.jpg';
import { Link } from '@mui/material';
const FeaturedWork = () => {
  return (
    <div className='service-container bg-indigo-950 text-white min-h-screen'>
        <h3 className='text-5xl font-bold p-4 md:p-8'>Featured Work</h3>
        <div className='border-2 w-11/12 flex  justify-center m-auto '>
        <div className='flex max-h-screen flex-col md:flex-row items-center justify-center'>
            <img src={FullStack} alt='' className='w-2/3 max-h-full'></img>
            <div className='w-1/3 bg-indigo-900/50 h-full flex flex-col justify-center items-center'>
            <h2 className='text-xl'>Full Stack</h2>
            <h1 className='text-3xl text-bold mt-3' >Nientex Website Redesign</h1>
            <p className='text-center m-3'>Revamp your online presence with a modern and user-friendly Nientex website redesign 
                that showcases your hotel's luxury amenities and increases bookings.</p>
            <Link className='cursor-pointer' color='inherit'>Project Details</Link>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default FeaturedWork