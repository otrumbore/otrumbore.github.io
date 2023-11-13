import React from 'react'

//change github remote

const About = () => {
  return (
    <div name="about" className='w-full h-screen mt-[30%] lg:mt-0'>
      <div className='flex flex-col items-center justify-center px-8 lg:space-x-5'>
        <div className='flex flex-row max-w-[1000px] w-[100%]'>
          <div className='w-[100%] lg:w-5/12 pb-10 lg:text-right'>
            <p className='text-4xl md:text-5xl lg:text-6xl font-bold inline border-b-4 border-b-[#000080] dark:border-b-[#37cdbe]'>About</p>
          </div>
          <div className='hidden w-7/12'></div>
        </div>
        <div className='max-w-[1000px] w-[100%] flex flex-col lg:flex-row space-y-5 lg:space-x-5 lg:space-y-0'>
          <div className='lg:w-5/12 lg:text-right text-2xl md:text-3xl lg:text-4xl font-bold'>
            <p>Hi I'm Odnel, please take a look around.</p>
          </div>
          <div className='lg:w-7/12 text-lg'>
            <p>
            Highly-motivated employee with desire to take on new challenges. Strong 
          worth ethic, adaptability and exceptional interpersonal skills. Adept at working effectively unsupervised and quickly mastering new skills. 
          Expert in transferable skills such as coding, data analysis, or other technical skills with a strong commitment to learn and master additional 
          skills through certifications and course studies. 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About