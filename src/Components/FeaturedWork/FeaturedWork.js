import React from 'react'
import FullStack from '../../FullStack.jpg';
import business from '../../business.jpg';
import ecom from '../../ecommerce.jpg'
import { Link } from '@mui/material';

const FeaturedWork = () => {
  return (
    <div className='service-container bg-indigo-950 text-white py-8'>
      <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold p-4 md:p-8 text-center md:text-left'>Featured Work</h3>
      
      {/* Main featured project */}
      <div className='border-2 w-11/12 mx-auto overflow-hidden rounded-lg'>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-2/3'>
            <img src={FullStack} alt='Full Stack Project' className='w-full h-auto object-cover'></img>
          </div>
          <div className='w-full md:w-1/3 bg-indigo-900/50 p-6 md:p-8'>
            <h2 className='text-lg md:text-xl text-center md:text-left'>Full Stack</h2>
            <h1 className='text-2xl md:text-3xl font-bold mt-3 text-center md:text-left'>Nientex Website Redesign</h1>
            <p className='text-sm md:text-base text-center md:text-left my-4'>
              Revamp your online presence with a modern and user-friendly Nientex website redesign 
              that showcases your hotel's luxury amenities and increases bookings.
            </p>
            <div className='text-center md:text-left'>
              <Link className='cursor-pointer' color='inherit'>Project Details</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Secondary projects */}
      <div className='flex flex-col md:flex-row w-11/12 mx-auto gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-10'>
        <div className='w-full md:w-1/2 bg-indigo-900/50 rounded-lg overflow-hidden'>
          <div className='h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden'>
            <img src={ecom} alt='Ecommerce Project' className='w-full h-full object-cover'></img>
          </div>
          <div className='p-4 md:p-6'>
            <h1 className='text-lg md:text-xl text-center'>Ecommerce</h1>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mt-2 text-center'>Brittany & Co Front Store</h1>
            <div className='text-center mt-4'>
              <Link className='cursor-pointer' color='inherit'>View Project</Link>
            </div>
          </div>
        </div>
        
        <div className='w-full md:w-1/2 bg-indigo-900/50 rounded-lg overflow-hidden mt-4 md:mt-0'>
          <div className='h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden'>
            <img src={business} alt='Front End Project' className='w-full h-full object-cover'></img>
          </div>
          <div className='p-4 md:p-6'>
            <h1 className='text-lg md:text-xl text-center'>Front End</h1>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mt-2 text-center'>NeuroApp Landing Page</h1>
            <div className='text-center mt-4'>
              <Link className='cursor-pointer' color='inherit'>View Project</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedWork