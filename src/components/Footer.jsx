import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='w-full h-[80px] mt-10 border-t-2 border-[#0ff] pt-4'>
        <div className='max-w-[1000px] h-full px-8 items-center justify-center'>
          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <p className=''>Socials</p>
            <p className='text-right'>Links / Info?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer