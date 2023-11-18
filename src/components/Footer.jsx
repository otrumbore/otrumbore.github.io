import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='w-full h-[80px] flex justify-center items-center mt-10 border-t-2 border-[#000080] dark:border-[#0ff] pt-2'>
        <div className='w-full flex flex-col max-w-[1000px] h-full justify-center items-center'>
          <div className='flex flex-row gap-8 w-full lg:px-0 justify-evenly'>
            <p>Socials</p>
            <p className='hidden lg:flex'>Links / Info?</p>
            <p>Copyright</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer