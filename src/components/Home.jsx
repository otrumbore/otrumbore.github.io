import React from 'react'
import Avatar from '../assets/hi.png'
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name="home" className='w-full min-h-screen mt-[180px] landscape:mt-[100px] lg:landscape:mt-0 lg:h-screen lg:mt-0'>

      <div className='max-w-[1100px] mx-auto px-8 flex flex-col lg:flex-row lg:space-x-20 items-center justify-center h-full'>
        <div className='flex-auto'>
        <p className='text-[#37cdbe] text-lg md:text-xl'>Hi there, I am</p>
        <h1 className='text-4xl md:text-5xl lg:text-6xl  font-bold text-[#ccd6f6]'>Odnel Trumbore</h1>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#8892b0]'>I'm a Frontend Devloper</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] text-lg md:text-xl'>Highly-motivated employee with desire to take on new challenges. Strong 
          worth ethic, adaptability and exceptional interpersonal skills. Adept at working effectively unsupervised and quickly mastering new skills. 
          Expert in transferable skills such as coding, data analysis, or other technical skills with a strong commitment to learn and master additional 
          skills through certifications and course studies. 
        </p>
        <div className='py-4'>
          <button className="group border-2 border-[#37cdbe] hover:bg-[#37cdbe] ease-in-out duration-75 hover:text-gray-800 font-bold py-3 px-6 rounded-lg flex items-center">View Work
          <span className='lg:group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span>
          </button>
        </div>
        </div>
        <div className='flex-auto'>
        <img src={Avatar} alt="Avatar" className='w-[300px] lg:w-[500px] lg:mt-[-100px] h-auto transition ease-in-out delay-50 lg:hover:-translate-y-1 lg:hover:scale-150 duration-300' />
        </div>
      </div>

    </div>
  )
}

export default Home