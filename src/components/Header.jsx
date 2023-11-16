import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'

//logo image
import LogoWhite from '../assets/logo-white.png';
import LogoDark from '../assets/Logo-Dark.png';

const Header = (props) => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollLimit = 100; // Change this value as needed

      if (scrollTop > scrollLimit) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <div className={`fixed w-full h-[80px] top-0 right-0 left-0 flex justify-between items-center px-4 dark:bg-[#031b28] bg-[#F0F0E7] dark:text-gray-300 
    transition ease-in-out duration-700 ${isScrolled ? 'dark:bg-opacity-80' : 'dark:bg-opacity-0'} ${isScrolled ? 'bg-opacity-80' : 'bg-opacity-0'}`}>
      
      {/*Logo and name */}
      <div className='flex items-center'>
        <a href="/">
        {props.darkMode ? (
        <img src={LogoWhite} alt="Logo" className='lg:w-[85px] w-[75px] h-auto delay-100 lg:hover:animate-pulse duration-300'/>
      ) : (
        <img src={LogoDark} alt="Logo" className='lg:w-[85px] w-[75px] h-auto delay-100 lg:hover:animate-pulse duration-300'/>
      )}
        </a>
        <span className='hidden md:flex ml-4 text-2xl'>Odnel Trumbore</span>
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