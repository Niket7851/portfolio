import React from 'react'
import frontend from '../../frontend.jpg'
const Services = () => {
  return (
    <div className='service-container bg-indigo-950 min-h-screen text-white'>
        <h3 className='text-5xl font-bold p-4 md:p-8'>Services</h3>
        <div className='flex flex-col md:flex-row w-full px-5 md:px-10 md:justify-between items-center md:m-7 md:my-10'>
            <div className='flex-1 '>
            <h1 className='text-blue-300'>01</h1>
            <h1 className='text-4xl font-bold text-white'>Front End</h1>
            <p className='py-7 text-xl'>I am proficient in designing beautiful and intuitive interfaces that enhance user experience,
                 making our hotel’s website a pleasure to navigate.</p>
            <ui>
                <li className='p-1 text-xl'>Responsive Web Design</li>
                <li className='p-1 text-xl'>Tailwind CSS for Rapid Styling</li>
                <li className='p-1 text-xl'>Component-Based Architecture with React</li>
                <li className='p-1 text-xl'>Optimized Performance</li>
            </ui>
            </div>
              <div className='flex-1 max-h-auto object-fit m-auto flex justify-end px-6'>
                  <img src={frontend} alt='' className="w-[350px] h-auto rounded-full" />
              </div>

        </div>
        <div className='flex flex-col md:flex-row w-full px-5 md:px-10 md:justify-between items-center md:m-7 md:my-10'>
            <div className='flex-1 '>
            <h1 className='text-blue-300'>01</h1>
            <h1 className='text-4xl font-bold text-white'>Back End</h1>
            <p className='py-7 text-xl'>I am proficient in designing beautiful and intuitive interfaces that enhance user experience,
                 making our hotel’s website a pleasure to navigate.</p>
            <ui>
                <li className='p-1 text-xl'>Responsive Web Design</li>
                <li className='p-1 text-xl'>Tailwind CSS for Rapid Styling</li>
                <li className='p-1 text-xl'>Component-Based Architecture with React</li>
                <li className='p-1 text-xl'>Optimized Performance</li>
            </ui>
            </div>
              <div className='flex-1 max-h-auto object-fit m-auto flex justify-end px-6'>
                  <img src={frontend} alt='' className="w-[350px] h-auto rounded-full" />
              </div>

        </div>
        <div className='flex flex-col md:flex-row w-full px-5 md:px-10 md:justify-between items-center md:m-7 md:my-10'>
            <div className='flex-1 '>
            <h1 className='text-blue-300'>01</h1>
            <h1 className='text-4xl font-bold text-white'>Back End</h1>
            <p className='py-7 text-xl'>I am proficient in designing beautiful and intuitive interfaces that enhance user experience,
                 making our hotel’s website a pleasure to navigate.</p>
            <ui>
                <li className='p-1 text-xl'>Responsive Web Design</li>
                <li className='p-1 text-xl'>Tailwind CSS for Rapid Styling</li>
                <li className='p-1 text-xl'>Component-Based Architecture with React</li>
                <li className='p-1 text-xl'>Optimized Performance</li>
            </ui>
            </div>
              <div className='flex-1 max-h-auto object-fit m-auto flex justify-end px-6'>
                  <img src={frontend} alt='' className="w-[350px] h-auto rounded-full" />
              </div>

        </div>
        
    </div>
  )
}

export default Services;