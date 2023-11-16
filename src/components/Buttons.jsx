import React from 'react'

const Buttons = ({children, style, onClick}) => {
  return (
    <button onClick={onClick} className={`border-2 dark:border-[#0ff] dark:hover:bg-[#0ff] dark:hover:text-gray-800 border-[#000080] hover:border-white hover:bg-[#000080]
     hover:text-gray-300 font-bold py-2 px-4 rounded-lg inline-flex items-center hover:animate-pulse duration-200 dark:hover:border-black ${style}`}>
        {children}
    </button>
  )
}

export default Buttons