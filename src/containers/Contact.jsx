import React from 'react'
import Buttons from '../components/Buttons'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen flex justify-center p-8 items-center'>
      <form action='/' className='flex flex-col max-w-[600px] w-full space-y-6'>
        <div className='pb-8'>
          <p className='text-4xl md:text-5xl lg:text-6xl font-bold inline border-b-4 border-b-[#000080] dark:border-b-[#37cdbe]'>Contact</p>
          <p className='pt-8' >Submit the form below or contact me via email: otrumbore@gmail.com</p>
        </div>
        <div className='pb-8 flex flex-col max-w-[600px] w-full space-y-6'>
          <input className='py-4 dark:bg-slate-600 bg-neutral-200 dark:text-white text-black dark:placeholder:text-white placeholder:text-gray-700 border-2 border-[#000080] dark:border-[#0ff] text-center focus:text-left focus:pl-4' type='text' placeholder='Name' name='name'></input>
          <input className='py-4 dark:bg-slate-600 bg-neutral-200 dark:text-white text-black dark:placeholder:text-white placeholder:text-gray-700 border-2 border-[#000080] dark:border-[#0ff] text-center focus:text-left focus:pl-4' type='email' placeholder='Email' name='email'></input>
          <input className='py-4 dark:bg-slate-600 bg-neutral-200 dark:text-white text-black dark:placeholder:text-white placeholder:text-gray-700 border-2 border-[#000080] dark:border-[#0ff] text-center focus:text-left focus:pl-4' type='text' placeholder='Subject' name='subject'></input>
          <textarea className='px-4 dark:bg-slate-600 bg-neutral-200 dark:text-white text-black dark:placeholder:text-white placeholder:text-gray-700 border-2 border-[#000080] dark:border-[#0ff] text-center pt-4 focus:text-left focus:pl-4' cols='30' rows='8' placeholder='Message' name='message'></textarea>
          <button className='border-2 dark:border-[#0ff] dark:hover:bg-[#0ff] dark:hover:bg-opacity-80 dark:hover:text-gray-800 border-[#000080] hover:bg-[#000080]
     hover:text-gray-300 font-bold py-3 px-8 my-8 mx-auto rounded-lg flex items-center hover:animate-pulse duration-200 hover:shadow-[0_0_20px_20px_rgba(0,0,128,0.5)] dark:hover:shadow-[0_0_20px_20px_rgba(0,255,255,0.5)]'>Send!!</button>
        </div>
      </form>
    </div>
  )
}

export default Contact