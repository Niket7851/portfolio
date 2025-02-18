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
    <div className='intro flex flex-col md:flex-row items-center justify-between w-full px-10 gap-8 text-blue-300 m-14 p-14 min-h-screen'>
      <div className='w-1/3 flex flex-col' data-aos="zoom-y-out">
        <img src={image} alt='' className='w-full h-auto object-cover rounded-lg'></img>
        <div className='flex justify-center gap-4 mt-5' data-aos="zoom-y-out">
            <InstagramIcon className='cursor-pointer transition-transform duration-300 hover:scale-110'/>
            <XIcon className='cursor-pointer transition-transform duration-300 hover:scale-110'/>
            <LinkedInIcon className='cursor-pointer transition-transform duration-300 hover:scale-110'/>
            <WhatsAppIcon className='cursor-pointer transition-transform duration-300 hover:scale-110'/>
        </div>
      </div>
      <div className='w-full md:w-2/3 text-center md:text-left' data-aos="zoom-y-out">
        <h1 className='text-4xl text-center'>I’m Niket Shukla. I’m passionate about crafting exceptional websites. With a blend of design skills and coding expertise, I create unique online experiences that captivate users.</h1>
        <p className='mt-5 text-center'>Looking for a top-notch web developer to revamp your hotel’s website? Look no further than Niket Shukla. With years of experience and a keen eye for design, John can take your site to the next level, helping you attract more visitors and boost your bookings.</p>
      </div>
    </div>
  )
}

export default Introduction