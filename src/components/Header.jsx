import React, {useState} from 'react'
import Navbar from './Navbar'

//logo image
import Logo from '../assets/logo-white.png';

const Header = (props) => {

  return (
    <div className='fixed w-full h-[80px] top-0 right-0 left-0 flex justify-between items-center px-4 bg-[#031b28] bg-opacity-80'>
      
      {/*Logo and name */}
      <div className='flex items-center'>
        <img src={Logo} alt="Logo" className='lg:w-[85px] lg:h-auto w-[75px] h-auto lg:hover:animate-spin duration-300'/>
        <span className='hidden md:flex ml-4 text-2xl text-white'>Odnel Trumbore</span>
      </div>

      {/* Navbar */}
      <Navbar
        darkMode={props.darkMode} 
        toggleDarkMode={props.toggleDarkMode}
      />
    </div>
  )
}

export default Header