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
    const [open, handelOpen] = useState(false)
    const handelClick = () =>{
        handelOpen(true);
    }

    useEffect(() => {
            AOS.init({
              disable: "phone",
              duration: 700,
              easing: "ease-out-cubic",
            });
          }, []);

  return (
    <div className='featured flex flex-col justify-center text-center m-auto w-1/2 mt-14 pt-10 flex-wrap ' data-aos="zoom-y-out">
        <h1 className='text-6xl font-bold flex-wrap'>Freelance web developer based in India</h1>
        <p className='m-auto mt-6 flex-wrap'>Expert development services by IN-based freelancer for your website needs.</p>
        <div className='m-auto md:mt-12 mt-2 flex flex-col md:flex-row item-center'>
            <div className='mt-5 mr-2 relative inline-block'>
            <Button variant='contained' size='large' color='success' endIcon={<WifiCallingIcon/>} onClick={handelClick} >Let's Connect</Button>
                  <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
            </div>
            <div className='mt-5 mr-2'>
            <Button variant='outlined' size='large' color='white' endIcon={<AssuredWorkloadIcon/>}>My Work</Button>
            </div>
        </div>
        <h2 className='font-black flex-wrap text-3xl mt-5'>Tech Stack</h2>
        <div className='flex justify-between mt-5 flex-wrap'>
            <img src={mongoDbIcon} alt=''></img>
            <img src={expressIcon} alt=''></img>
            <img src={reactIcon} alt=''></img>
            <img src={nodeIcon} alt=''></img>
        </div>
        <Dialog open={open} handelOpen={handelOpen}/>
    </div>
  )
}

export default Featured