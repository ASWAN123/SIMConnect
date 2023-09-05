import React from 'react'


function Logo() {
  return (
    <div className="flex gap-1 p-1 items-center font-semibold ">
      <div className='flex gap-1 items-end'>
        <span className='h-2 w-1 bg-[#000080]'></span>
        <span className='h-4 w-1 bg-[#000080]'></span>
        <span className='h-6 w-1 bg-[#000080]'></span>
      </div>
     <p className='text-[#000080] text-[18px] py-1'>SIM-Connect</p>
    {/* <img className='w-[150px]  bg-blue-800 ' src="./Logo.png" alt="" /> */}
</div>
  )
}

export default Logo