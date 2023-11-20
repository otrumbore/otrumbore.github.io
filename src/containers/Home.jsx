import React, {useEffect, useRef, useState} from 'react'
import Avatar from '../assets/hi.png'
import {HiArrowNarrowRight} from 'react-icons/hi';
import Buttons from '../components/Buttons';
import { Link } from 'react-scroll';

const Home = () => {

  return (
    <div name="home" className='w-full h-screen mt-[130px] lg:mt-0 z-10'>

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col lg:flex-row lg:space-x-5 items-center justify-center h-full' id="home-element">
        <div className='flex-auto'>
        <p className='dark:text-[#37cdbe] text-[#000080] text-lg md:text-xl'>Greetings! Welcome to my ever evolving portfolio!</p>
        <h1 className='text-4xl md:text-5xl lg:text-6xl  font-bold text-gray-800 dark:text-gray-100'>Odnel Trumbore</h1>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold dark:text-gray-300'>Frontend Developer Extraordinaire</h2>
        <p className='dark:text-white py-4 max-w-[700px] text-lg md:text-xl'>
        I'm driven by a passion for tackling new challenges head-on. With a robust work ethic, adaptability, and exceptional interpersonal finesse, 
        I thrive in both collaborative environments and when working autonomously. My forte lies not only in frontend development 
        but also in swiftly mastering new skills, be it coding, data analysis, or other technical expertise. 
        <br />
        <br />
        Stay tuned as I continue crafting my journey of professional growth and technical excellence.
        </p>
        <Link to='projects' smooth={true} duration={300} offset={-50}>
        <div className='lg:py-4'>
            <Buttons style={'group px-8 py-4'}>
              View Work<span className='lg:group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span>
            </Buttons>
        </div>
        </Link>
        </div>
        <div className='flex-auto'>
        <img src={Avatar} alt="Avatar" className='hidden lg:flex ml-20 border border-black border-opacity-0 rounded-e-full w-[500px] lg:mt-[-120px] h-auto ease-in-out delay-100 lg:hover:rotate-12 duration-300' />
        </div>
      </div>
    </div>
  )
}

export default Home