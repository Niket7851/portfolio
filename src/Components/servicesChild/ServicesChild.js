import React from 'react'
import frontend from '../../frontend.jpg'
import backend from '../../backend.jpg'
import fullStack from '../../FullStack.jpg'

const ServicesChild = () => {

    const service = [
        {
            heading: "Front End",
            paragraph: "I am proficient in designing beautiful and intuitive interfaces that enhance user experience, making our hotel’s website a pleasure to navigate.",
            ul :[
                "Responsive Web Design",
                "Tailwind CSS for Rapid Styling",
                "Component-Based Architecture with React",
                "Optimized Performance"
            ],
            image : frontend
        },
        {
            heading: "Back End",
            paragraph: "I am proficient in designing beautiful and intuitive interfaces that enhance user experience, making our hotel’s website a pleasure to navigate.",
            ul :[
                "Responsive Web Design",
                "Tailwind CSS for Rapid Styling",
                "Component-Based Architecture with React",
                "Optimized Performance"
            ],
            image : backend
        },
        {
            heading: "Full Stack",
            paragraph: "I am proficient in designing beautiful and intuitive interfaces that enhance user experience, making our hotel’s website a pleasure to navigate.",
            ul :[
                "Responsive Web Design",
                "Tailwind CSS for Rapid Styling",
                "Component-Based Architecture with React",
                "Optimized Performance"
            ],
            image : fullStack
        }
    ]
  return (
    <div>
        { service.map((item, index)=>(
            <div className='flex flex-col md:flex-row w-full px-5 md:px-10 md:justify-between items-center md:pb-14'>
            <div className='flex-1 '>
            <h1 className='text-blue-300'>{index+1}</h1>
            <h1 className='text-4xl font-bold text-white'>{item.heading}</h1>
            <p className='py-7 text-xl'>{item.paragraph}</p>
            <ui>
            {item.ul.map((feature, index) => (
                    <li className='p-1 text-xl'>
                    {feature}
                </li>
                ))
            }
            </ui>
            </div>
              <div className='flex-1 max-h-auto object-fit m-auto flex justify-end px-6'>
                  <img src={item.image} alt='' className="w-[350px] h-auto rounded-full" />
              </div>

        </div>
       ) )}
    </div>
  )
}

export default ServicesChild