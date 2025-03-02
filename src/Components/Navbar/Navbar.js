import React, { useState } from 'react'
import './navbar.css'
import Button from '@mui/material/Button';
import Dialog from '../Dialogue/Dialog';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    
    const handleClick = () => {
        setOpen(true);
    }
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div className='navbar w-full py-4 px-4 md:py-6 md:px-10 lg:px-20'>
            <div className='flex justify-between items-center w-full'>
                <div className='logo text-xl'>
                    <h1>Niket Shukla</h1>
                </div>
                
                {/* Desktop Menu */}
                <div className='hidden md:flex content text-xl gap-x-10 cursor-pointer'>
        <button onClick={() => scrollToSection('/')}>Home</button>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('services')}>Services</button>
        <button onClick={() => scrollToSection('work')}>Work</button>

                </div>
                
                <div className='hidden md:flex connect text-xl items-center'>
                    <Button 
                        variant='outlined' 
                        className='button' 
                        color='white' 
                        size='medium' 
                        onClick={handleClick}
                    >
                        Lets Connect
                    </Button>
                    <Dialog open={open} handelOpen={setOpen}/>
                </div>
                
                {/* Mobile Menu Button */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-xl p-2'>
                        {menuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>
            
            {/* Mobile Menu */}
            {menuOpen && (
                <div className='md:hidden w-full mt-4 flex flex-col items-center'>
                    <div className='content text-xl flex flex-col items-center gap-y-4 cursor-pointer w-full'>
                         <button onClick={() => scrollToSection('/?')}>Home</button>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('services')}>Services</button>
        <button onClick={() => scrollToSection('work')}>Work</button>
                    </div>
                    <div className='connect text-xl mt-4 w-full flex justify-center'>
                        <Button 
                            variant='outlined' 
                            className='button' 
                            color='white' 
                            size='medium' 
                            onClick={handleClick}
                        >
                            Lets Connect
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar