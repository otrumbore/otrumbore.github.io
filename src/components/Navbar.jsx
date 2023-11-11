import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsSun, BsMoon} from 'react-icons/bs';

const Navbar = () => {

    const [navState, setNavState] = useState(false);

    const handleNavClick = () => {
        setNavState(!navState);
    }

  return (
    <div className='inline-flex items-center'>
        <ul className='hidden lg:flex text-1xl space-x-4'>
            <li className='hover:text-[#37cdbe] hover:border-b-2 border-[#37cdbe] hover:animate-pulse duration-75'>Home</li>
            <li className='hover:text-[#37cdbe] hover:border-b-2 border-[#37cdbe] hover:animate-pulse duration-75'>About Me</li>
            <li className='hover:text-[#37cdbe] hover:border-b-2 border-[#37cdbe] hover:animate-pulse duration-75'>Skills</li>
            <li className='hover:text-[#37cdbe] hover:border-b-2 border-[#37cdbe] hover:animate-pulse duration-75'>Projects</li>
            <li className='hover:text-[#37cdbe] hover:border-b-2 border-[#37cdbe] hover:animate-pulse duration-75'>Contact</li>
        </ul>
        <div className={`flex ml-4 space-x-4 ${navState ? 'hidden' : ''}`}>
            <button className='text-3xl hover:text-[#37cdbe] lg:hover:animate-pulse duration-75'><BsSun /></button>
            <button className="border-2 border-[#37cdbe] hover:bg-[#37cdbe] hover:text-gray-800 font-bold py-2 px-4 rounded-lg inline-flex items-center lg:hover:animate-bounce ease-in-out duration-75">
                <span className='hidden md:flex'>Resume</span>
                <span className='md:hidden'>CV</span>
                <svg className="fill-current w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            </button>
        </div>
        <button onClick={handleNavClick} className='flex ml-4 text-3xl z-10 lg:hidden'>{!navState ? <FaBars /> : <FaTimes />}</button>
        <div className={navState ? ' ease-linear duration-300' : 'hidden'}>
            <ul className='absolute text-2xl top-0 right-0 w-[50%] h-screen bg-[#083248] bg-opacity-90 flex flex-col justify-start items-center space-y-6 pt-24 rounded-l-xl'>
                <li className=''>Home</li>
                <li className=''>About Me</li>
                <li className=''>Skills</li>
                <li className=''>Projects</li>
                <li className=''>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar