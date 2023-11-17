import React from 'react'

const Buttons = ({children, style, onClick}) => {
  return (
    <button onClick={onClick} className={`border-2 dark:border-[#0ff] dark:hover:bg-[#0ff] dark:hover:bg-opacity-80 dark:hover:text-gray-800 border-[#000080] hover:bg-[#000080]
     hover:text-gray-300 font-bold py-2 px-4 rounded-lg inline-flex items-center hover:animate-pulse duration-200 hover:shadow-[0_0_20px_20px_rgba(0,0,128,0.5)] dark:hover:shadow-[0_0_20px_20px_rgba(0,255,255,0.5)] ${style}`}>
        {children}
    </button>
  )
}

export default Buttons