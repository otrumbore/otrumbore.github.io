import React, {useEffect, useRef, useState} from 'react'
import Avatar from '../assets/hi.png'
import {HiArrowNarrowRight} from 'react-icons/hi';
import Buttons from '../components/Buttons';

const Home = () => {

  return (
    <div name="home" className='w-full h-screen mt-[160px] landscape:mt-[120px] lg:landscape:mt-0 lg:h-screen lg:mt-0 z-10'>

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col lg:flex-row lg:space-x-5 items-center justify-center h-full' id="home-element">
        <div className='flex-auto'>
        <p className='dark:text-[#37cdbe] text-[#000080] text-lg md:text-xl'>Hi there, I am</p>
        <h1 className='text-4xl md:text-5xl lg:text-6xl  font-bold text-gray-800 dark:text-gray-100'>Odnel Trumbore</h1>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold dark:text-gray-300'>A Frontend Devloper</h2>
        <p className='dark:text-white py-4 max-w-[700px] text-lg md:text-xl'>Highly-motivated employee with desire to take on new challenges. Strong 
          worth ethic, adaptability and exceptional interpersonal skills. Adept at working effectively unsupervised and quickly mastering new skills. 
          Expert in transferable skills such as coding, data analysis, or other technical skills with a strong commitment to learn and master additional 
          skills through certifications and course studies. 
        </p>
        <div className='lg:py-4'>
          <Buttons onClick={null} style={'group px-8 py-4'}>
            View Work<span className='lg:group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span>
          </Buttons>
        </div>
        </div>
        <div className='flex-auto' id="home-img">
        <img src={Avatar} alt="Avatar" className='hidden lg:flex ml-20 border border-black border-opacity-0 rounded-e-full w-[500px] lg:mt-[-0px] h-auto ease-in-out delay-100 lg:hover:rotate-12 duration-300' />
        </div>
      </div>
    </div>
  )
}

export default Home