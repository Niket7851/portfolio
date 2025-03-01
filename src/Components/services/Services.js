import React from 'react'
import ServicesChild from '../servicesChild/ServicesChild';

const Services = () => {
  return (
    <div className='service-container bg-indigo-950 text-white py-8 md:py-12'>
        <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold p-4 md:p-8 text-center md:text-left'>Services</h3>
        <ServicesChild/>
    </div>
  )
}

export default Services;