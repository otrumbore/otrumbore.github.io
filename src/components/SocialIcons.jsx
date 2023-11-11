import React from 'react'
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const SocialIcons = () => {
  return (
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0 text-xl'>
        <ul className=''>
            <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a66c2] p-4 pl-6 rounded-md text-white'>
                <a href="/" className='flex justify-between items-center w-full '>LinkedIn <FaLinkedin size={30}/></a>
            </li>
            <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333] p-4 pl-6 rounded-md text-white'>
                <a href="/" className='flex justify-between items-center w-full '>GitHub <FaGithub size={30} /></a>
            </li>
            <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#98ff98] p-4 pl-6 rounded-md text-black'>
                <a href="/" className='flex justify-between items-center w-full '>E-Mail <HiOutlineMail size={30} /></a>
            </li>
        </ul>
    </div>
  )
}

export default SocialIcons