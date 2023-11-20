import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsSun, BsMoon, BsFillSunFill, BsFillMoonFill} from 'react-icons/bs';
import Buttons from './Buttons';
import { Link } from 'react-scroll';
import Resume from '../assets/downloads/OdnelTrumboreSiteResume.pdf';

const Navbar = (props) => {

    const [navState, setNavState] = useState(false);

    const handleNavClick = () => {
        setNavState(!navState);
    }

  return (
    <div className='inline-flex items-center z-10'>
        <ul className='hidden lg:flex text-1xl space-x-5'>
            <li className='dark:hover:text-[#37cdbe] hover:text-[#031b28] hover:border-b-2 hover:border-[#031b28] hover:scale-125 dark:border-[#37cdbe] hover:animate-pulse duration-75'>
                <Link to='home' smooth={true} duration={300} offset={0}>
                    Home
                </Link>
            </li>
            <li className='dark:hover:text-[#37cdbe] hover:text-[#031b28] hover:border-b-2 hover:border-[#031b28] hover:scale-125 dark:border-[#37cdbe] hover:animate-pulse duration-75'>
                <Link to='about' smooth={true} duration={300} offset={-200}>
                    About Me
                </Link>
            </li>
            <li className='dark:hover:text-[#37cdbe] hover:text-[#031b28] hover:border-b-2 hover:border-[#031b28] hover:scale-125 dark:border-[#37cdbe] hover:animate-pulse duration-75'>
                <Link to='skills' smooth={true} duration={300} offset={-200}>
                    Skills
                </Link>
            </li>
            <li className='dark:hover:text-[#37cdbe] hover:text-[#031b28] hover:border-b-2 hover:border-[#031b28] hover:scale-125 dark:border-[#37cdbe] hover:animate-pulse duration-75'>
                <Link to='projects' smooth={true} duration={300} offset={-200}>
                    Projects
                </Link>
            </li>
            <li className='dark:hover:text-[#37cdbe] hover:text-[#031b28] hover:border-b-2 hover:border-[#031b28] hover:scale-125 dark:border-[#37cdbe] hover:animate-pulse duration-75'>
                <Link to='contact' smooth={true} duration={300} offset={-100}>
                    Contact
                </Link>
            </li>
        </ul>
        <div className={`flex ml-4 space-x-4 ${navState ? 'hidden' : ''}`}>
            <button onClick={props.toggleDarkMode} className='text-3xl group dark:hover:text-[#0ff] hover:text-[#000080] hover:scale-125 lg:hover:animate-pulse duration-75 hover:shadow-none dark:hover:shadow-none'>
                {props.darkMode ? <BsSun className='group-hover:hidden'/> : <BsMoon className='group-hover:hidden'/>}{props.darkMode ? <BsFillSunFill className='hidden group-hover:block'/> : <BsFillMoonFill className='hidden group-hover:block'/>}
            </button>
            <a href={Resume} download='OdnelTrumboreSiteResume.pdf' target='_blank'>
            <div>
                <Buttons style={null} onClick={null}>
                    <span className='hidden md:flex'>Resume</span>
                    <span className='md:hidden'>CV</span>
                    <svg className="fill-current w-4 h-4 ml-2 animate-bounce duration-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                </Buttons>
            </div>
            </a>
        </div>
        <button onClick={handleNavClick} className='flex text-3xl z-10 lg:hidden ml-4'>{!navState ? <FaBars /> : <FaTimes />}</button>
        <div className={navState ? ' ease-linear duration-300' : 'hidden'}>
            <ul className='absolute text-2xl top-0 right-0 w-[50%] h-screen dark:bg-[#083248] bg-[#1196de] dark:bg-opacity-90 bg-opacity-90 flex flex-col justify-start items-center space-y-6 pt-24 rounded-l-xl'>
                <li className=''>
                    <Link to='home' onClick={handleNavClick} smooth={true} duration={300} offset={-200}>
                        Home
                    </Link>
                </li>
                <li className=''>
                    <Link to='about' onClick={handleNavClick} smooth={true} duration={300} offset={-150}>
                        About Me
                    </Link>
                </li>
                <li className=''>
                    <Link to='skills' onClick={handleNavClick} smooth={true} duration={300} offset={-150}>
                        Skills
                    </Link>
                </li>
                <li className=''>
                    <Link to='projects' onClick={handleNavClick} smooth={true} duration={300} offset={0}> {/*change offset after adding in more projects */}
                        Projects
                    </Link>
                </li>
                <li className=''>
                    <Link to='contact' onClick={handleNavClick} smooth={true} duration={300} offset={-50}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar