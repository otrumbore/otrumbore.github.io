import React from 'react'

const Projects = () => {

  return (
    <div name="projects" className='w-full h-[50vh] landscape:mt-40 md:h-screen'>
      <div className='max-w-[1000px] h-full mx-auto p-8 flex flex-col justify-center'>
        <div className='space-y-5'>
          <p className='text-4xl md:text-5xl lg:text-6xl font-bold inline border-b-4 border-b-[#000080] dark:border-b-[#37cdbe]'>Projects</p>
          <p className=''>
            Completed or are in progress</p>
        </div>
      </div>
    </div>
  )
}

export default Projects