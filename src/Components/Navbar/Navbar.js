import React, { useState } from 'react'
import './navbar.css'
import Button from '@mui/material/Button';
import Dialog from '../Dialogue/Dialog';
const Navbar = () => {
    const [open, handelOpen] = useState(false)
        const handelClick = () =>{
            handelOpen(true);
        }
  return (
    <div className='navbar flex justify-between py-6 px-20 flex-wrap '>
    <div className='logo text-xl flex-wrap'>
        <h1 className=''>Niket Shukla</h1>
    </div>
    <div className='content text-xl flex gap-x-10 cursor-pointer flex-wrap'>
        <h1 className=''>About</h1>
        <h1>Portfolio</h1>
        <h1>Services</h1>
    </div>
    <div className='connect text-xl flex align-center flex-wrap'>
        <Button variant='outlined' className='button' color='white' size='medium' onClick={()=>handelClick()}>Lets Connect</Button>
        <Dialog open={open} handelOpen={handelOpen}/>
    </div>
    </div>
  )
}

export default Navbar