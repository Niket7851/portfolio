import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import WifiCallingIcon from '@mui/icons-material/WifiCalling';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import reactIcon from '../../icons8-react-native-48.png'
import nodeIcon from '../../icons8-nodejs-48.png'
import expressIcon from '../../icons8-express-js-48.png'
import mongoDbIcon from '../../icons8-mongodb-48.png'
import Dialog from '../Dialogue/Dialog';
import AOS from "aos";
import "aos/dist/aos.css";

const Featured = () => {
    const [open, setOpen] = useState(false);
    
    const handleClick = () => {
        setOpen(true);
    }

    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div className='featured px-4 flex flex-col justify-center text-center mx-auto w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 mt-6 md:mt-10 lg:mt-14 pt-6 lg:pt-10' data-aos="zoom-y-out">
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>Freelance web developer based in India</h1>
            
            <p className='mx-auto mt-3 md:mt-4 lg:mt-6 text-sm md:text-base'>
                Expert development services by IN-based freelancer for your website needs.
            </p>
            
            <div className='mx-auto mt-6 md:mt-8 lg:mt-12 flex flex-col sm:flex-row justify-center items-center gap-4'>
                <div className='relative inline-block'>
                    <Button 
                        variant='contained' 
                        size='large' 
                        color='success' 
                        endIcon={<WifiCallingIcon/>} 
                        onClick={handleClick}
                    >
                        Let's Connect
                    </Button>
                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                </div>
                
                <div>
                    <Button 
                        variant='outlined' 
                        size='large' 
                        color='white' 
                        endIcon={<AssuredWorkloadIcon/>}
                        onClick={()=>{scrollToSection('work')}}
                    >
                        My Work
                    </Button>
                </div>
            </div>
            
            <h2 className='font-black text-xl sm:text-2xl md:text-3xl mt-8 md:mt-10'>Tech Stack</h2>
            
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center mt-4 md:mt-5 mx-auto w-full max-w-md'>
                <img src={mongoDbIcon} alt='MongoDB' className='w-10 h-10 md:w-12 md:h-12'></img>
                <img src={expressIcon} alt='Express' className='w-10 h-10 md:w-12 md:h-12'></img>
                <img src={reactIcon} alt='React' className='w-10 h-10 md:w-12 md:h-12'></img>
                <img src={nodeIcon} alt='Node.js' className='w-10 h-10 md:w-12 md:h-12'></img>
            </div>
            
            <Dialog open={open} handelOpen={setOpen}/>
        </div>
    )
}

export default Featured