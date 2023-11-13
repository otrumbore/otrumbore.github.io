import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsSun, BsMoon} from 'react-icons/bs';

const Navbar = (props) => {

    const [navState, setNavState] = useState(false);

    const handleNavClick = () => {
        setNavState(!navState);
    }

  return (
    <div className='inline-flex items-center'>
        <ul className='hidden lg:flex text-1xl space-x-5'>
            <li className='dark:hover:text-[#37cdbe] hover:text-[#031b28] hover:border-b-2 hover:border-[#031b28] hover:scale-125 dark:border-[#37cdbe] hover:animate-pulse duration-75'>Home</li>
            <li className='dark:hover:text-[#37cdbe] hover:text-[#031b28] hover:border-b-2 hover:border-[#031b28] hover:scale-125 dark:border-[#37cdbe] hover:animate-pulse duration-75'>About Me</li>
            <li className='dark:hover:text-[#37cdbe] hover:text-[#031b28] hover:border-b-2 hover:border-[#031b28] hover:scale-125 dark:border-[#37cdbe] hover:animate-pulse duration-75'>Skills</li>
            <li className='dark:hover:text-[#37cdbe] hover:text-[#031b28] hover:border-b-2 hover:border-[#031b28] hover:scale-125 dark:border-[#37cdbe] hover:animate-pulse duration-75'>Projects</li>
            <li className='dark:hover:text-[#37cdbe] hover:text-[#031b28] hover:border-b-2 hover:border-[#031b28] hover:scale-125 dark:border-[#37cdbe] hover:animate-pulse duration-75'>Contact</li>
        </ul>
        <div className={`flex ml-4 space-x-4 ${navState ? 'hidden' : ''}`}>
            <button onClick={props.toggleDarkMode} className='text-3xl dark:hover:text-[#37cdbe] hover:text-[#000080] hover:scale-125 lg:hover:animate-pulse duration-75'>{props.darkMode ? <BsSun /> : <BsMoon />}</button>
            <button className="border-2 dark:border-[#37cdbe] dark:hover:bg-[#37cdbe] dark:hover:text-gray-800 border-[#000080] hover:bg-[#000080] hover:text-gray-300 font-bold py-2 px-4 rounded-lg inline-flex items-center lg:hover:animate-bounce ease-in-out duration-75">
                <span className='hidden md:flex'>Resume</span>
                <span className='md:hidden'>CV</span>
                <svg className="fill-current w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            </button>
        </div>
        <button onClick={handleNavClick} className='flex ml-4 text-3xl z-10 lg:hidden'>{!navState ? <FaBars /> : <FaTimes />}</button>
        <div className={navState ? ' ease-linear duration-300' : 'hidden'}>
            <ul className='absolute text-2xl top-0 right-0 w-[50%] h-screen dark:bg-[#083248] bg-[#1196de] bg-opacity-90 flex flex-col justify-start items-center space-y-6 pt-24 rounded-l-xl'>
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