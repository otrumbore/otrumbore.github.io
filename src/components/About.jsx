import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-[100%] grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl md:text-5xl lg:text-6xl font-bold inline border-b-4 border-b-[#37cdbe]'>About</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-[100%] grid grid-cols-2 gap-8'>
          <div className='sm:text-right text-3xl lg:text-5xl font-bold'>
            <p>Hi I'm Odnel, please take a look around.</p>
          </div>
          <div>
            <p>About me here!! Testing</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About