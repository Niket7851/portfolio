import React, { useEffect } from 'react'
import frontend from '../../frontend.jpg'
import backend from '../../backend.jpg'
import fullStack from '../../FullStack.jpg'
import AOS from "aos";

const ServicesChild = () => {

        useEffect(() => {
            AOS.init({
              disable: "phone",
              duration: 700,
              easing: "ease-out-cubic",
            });
        }, []);
    const service = [
        {
            heading: "Front End",
            paragraph: "I am proficient in designing beautiful and intuitive interfaces that enhance user experience, making our hotel's website a pleasure to navigate.",
            ul: [
                "Responsive Web Design",
                "Tailwind CSS for Rapid Styling",
                "Component-Based Architecture with React",
                "Optimized Performance"
            ],
            image: frontend,
            data_aos : "fade-up-right"
        },
        {
            heading: "Back End",
            paragraph: "I am proficient in designing beautiful and intuitive interfaces that enhance user experience, making our hotel's website a pleasure to navigate.",
            ul: [
                "Responsive Web Design",
                "Tailwind CSS for Rapid Styling",
                "Component-Based Architecture with React",
                "Optimized Performance"
            ],
            image: backend,
            data_aos : "fade-up-left"
        },
        {
            heading: "Full Stack",
            paragraph: "I am proficient in designing beautiful and intuitive interfaces that enhance user experience, making our hotel's website a pleasure to navigate.",
            ul: [
                "Responsive Web Design",
                "Tailwind CSS for Rapid Styling",
                "Component-Based Architecture with React",
                "Optimized Performance"
            ],
            image: fullStack,
            data_aos : "fade-up-right"
        }
    ]

    return (
        <div className="space-y-16 md:space-y-24">
            {service.map((item, index) => (
                <div key={index} className='flex flex-col md:flex-row gap-8 w-full px-4 md:px-10 items-center' data-aos={item.data_aos}>
                    <div className={`w-full md:w-1/2 space-y-4 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                        <div className="flex items-baseline gap-2">
                            <h1 className='text-blue-300 text-2xl md:text-3xl font-semibold'>{index+1}</h1>
                            <h1 className='text-3xl md:text-4xl font-bold text-white'>{item.heading}</h1>
                        </div>
                        <p className='py-3 text-base md:text-xl'>{item.paragraph}</p>
                        <ul className="list-disc pl-5 space-y-2">
                            {item.ul.map((feature, idx) => (
                                <li key={idx} className='text-base md:text-xl'>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`w-full md:w-1/2 flex justify-center ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                        <img 
                            src={item.image} 
                            alt={item.heading} 
                            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-lg" 
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ServicesChild