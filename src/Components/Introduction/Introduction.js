import React, { useEffect } from 'react'
import image from '../../indomay32.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Introduction = () => {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
    }, []);

    return (
        <div className='intro flex flex-col md:flex-row items-center justify-between w-full px-4 sm:px-6 md:px-8 lg:px-10 gap-4 sm:gap-6 md:gap-8 text-white my-6 sm:my-8 md:my-10 lg:my-14 py-6 sm:py-8 md:py-10 lg:py-14 min-h-0 md:min-h-0 lg:min-h-screen'>
            <div className='flex-1 flex flex-col items-center md:items-start max-w-xs sm:max-w-sm md:max-w-md mx-auto md:mx-0' data-aos="zoom-y-out">
                <img 
                    src={image} 
                    alt='Niket Shukla profile' 
                    className='w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-full lg:h-auto object-cover rounded-full'
                />
                <div className='flex justify-center gap-3 sm:gap-4 mt-3 sm:mt-4 md:mt-5' data-aos="zoom-y-out">
                    <InstagramIcon className='text-xl sm:text-2xl md:text-3xl cursor-pointer transition-transform duration-300 hover:scale-110'/>
                    <XIcon className='text-xl sm:text-2xl md:text-3xl cursor-pointer transition-transform duration-300 hover:scale-110'/>
                    <LinkedInIcon className='text-xl sm:text-2xl md:text-3xl cursor-pointer transition-transform duration-300 hover:scale-110'/>
                    <WhatsAppIcon className='text-xl sm:text-2xl md:text-3xl cursor-pointer transition-transform duration-300 hover:scale-110'/>
                </div>
            </div>

            <div className='w-full md:w-2/3 mt-6 md:mt-0' data-aos="zoom-y-out">
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center md:text-left'>
                    I'm Niket Shukla. I'm passionate about crafting exceptional websites. With a blend of design skills and coding expertise, I create unique online experiences that captivate users.
                </h1>
                <p className='mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg text-center md:text-left'>
                    Looking for a top-notch web developer to revamp your hotel's website? Look no further than Niket Shukla. With years of experience and a keen eye for design, John can take your site to the next level, helping you attract more visitors and boost your bookings.
                </p>
            </div>
        </div>
    )
}

export default Introduction