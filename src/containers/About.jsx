import React from 'react'

//change github remote

const About = () => {
  return (
    <div name="about" className='w-full h-screen mb-96 lg:mb-20'>
      <div className='flex flex-col items-center justify-center px-8 md:space-x-5'>
        <div className='flex flex-row max-w-[1000px] w-[100%]'>
          <div className='w-[100%] md:w-5/12 pb-10 md:text-right'>
            <p className='text-4xl md:text-5xl lg:text-6xl font-bold inline border-b-4 border-b-[#000080] dark:border-b-[#37cdbe]'>About Me</p>
          </div>
          <div className='hidden md:block w-7/12'></div>
        </div>
        <div className='max-w-[1000px] w-[100%] flex flex-col md:flex-row space-y-5 md:space-x-5 md:space-y-0'>
          <div className='md:w-5/12 md:text-right text-2xl md:text-3xl lg:text-4xl font-bold'>
            <p>Take a look around and get to know me!</p>
          </div>
          <div className='md:w-7/12 text-lg'>
            <p>
              Welcome to my world of innovation and continuous learning! <br /><br />
              I'm Odnel Trumbore, a passionate Frontend Developer on an unending quest for knowledge and mastery. 
              Beyond my proficiency in frontend development, my insatiable curiosity and thirst for growth drive me to explore diverse domains. 
              My commitment isn't just to what's familiar; it's a dedication to constant evolution.<br /><br />
              I thrive on challenging myself through certifications and ongoing courses, 
              leveraging them as pathways to expand my expertise across various fields. 
              Each certification attained and every course undertaken serves as a building block, 
              enriching my skills and deepening my understanding.<br /><br />

              In this fast-paced digital landscape, 
              I believe in staying ahead by embracing new technologies and methodologies. 
              This commitment to perpetual learning empowers me to craft solutions that transcend boundaries and redefine possibilities.<br /><br />

              Join me on this journey as I blend creativity with technical finesse, pushing the boundaries of innovation, one skill at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About