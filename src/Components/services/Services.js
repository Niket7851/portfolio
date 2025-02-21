import React from 'react'
import ServicesChild from '../servicesChild/ServicesChild';
const Services = () => {
  return (
    <div className='service-container bg-indigo-950 text-white'>
        <h3 className='text-5xl font-bold p-4 md:p-8'>Services</h3>
        <ServicesChild/>
        
    </div>
  )
}

export default Services;