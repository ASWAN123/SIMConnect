import React from 'react'
import { MdOutline4GPlusMobiledata } from 'react-icons/md'
import { BiMessageRounded } from 'react-icons/bi'
import { IoCallSharp } from 'react-icons/io5'
import { TbPlus } from 'react-icons/tb'

const SimCards = () => {
  return (
    <div className=' mt-12 h-[400px] w-full bg-[#71c5f9] rounded-md flex  gap-4 py-2 px-4 flex-col relative'>

    <div className='flex gap-4 items-center justify-between mt-2 ml-4  text-white text-[14px]'>
      <p className=' py-1 cursor-pointer border-b border-black text-black '>All SIM Cards</p>
      {/* <BsFillPatchPlusFill size={40} color='white' className='   top-[-20px] rounded-full right-10 ' /> */}
    </div>


    <div className='flex gapp-4   items-center  '>

      <div id='card' className='relative w-[300px] h-[200px]    top-0 left-0 ml-4 mt-2 rounded-lg text-[14px] flex flex-col '>
        <img className='' src="./simcard.png" alt="" />
        <div className='absolute flex flex-col w-full  pl-2 py-2 gap-2 '>
          <div className='flex flex-col gap-1 '>
            <p>SIM Card Status: <span className='text-green-500 pl-1'>Active</span> </p>
            <p>Subscription Type: <span className='text-green-500 pl-1'>Basic </span></p>
          </div>

          <div className='flex flex-col gap-1 mt-4 '>
            <p>Plan Details:</p>
            <ul className='flex flex-col gap-1 '>
              <li className="text-gray-600 pl-1 flex gap-1 items-center "><MdOutline4GPlusMobiledata size={18} /> Data: 10 GB</li>
              <li className="text-gray-600 pl-1 flex gap-1 items-center "><IoCallSharp size={18} /> Minutes: 100 minutes</li>
              <li className="text-gray-600 pl-1 flex gap-1 items-center "><BiMessageRounded size={18} /> Messages: 50 messages</li>
            </ul>

          </div>
        </div>
      </div>

      <div id='card' className='relative w-[300px] h-[200px]    top-0 left-0 ml-4 mt-2 rounded-lg text-[14px] flex flex-col '>
        <img className='' src="./simcard.png" alt="" />
        <div className='absolute flex flex-col w-full  pl-2 py-2 gap-2  '>
          <div className='flex flex-col gap-1 '>
            <p>SIM Card Status: <span className='text-green-500 pl-1'>Active</span> </p>
            <p>Subscription Type: <span className='text-green-500 pl-1'>Basic </span></p>
          </div>

          <div className='flex flex-col gap-1 mt-4 '>
            <p>Plan Details:</p>
            <ul className='flex flex-col gap-1 '>
              <li className="text-gray-600 pl-1 flex gap-1 items-center "><MdOutline4GPlusMobiledata size={18} /> Data: 10 GB</li>
              <li className="text-gray-600 pl-1 flex gap-1 items-center "><IoCallSharp size={18} /> Minutes: 100 minutes</li>
              <li className="text-gray-600 pl-1 flex gap-1 items-center "><BiMessageRounded size={18} /> Messages: 50 messages</li>
            </ul>

          </div>
        </div>
      </div>

      <div id='card' className=' w-[300px] h-[200px]      relative  ml-4 mt-2 rounded-lg text-[14px] flex flex-col '>
        {/* <img className='w-[300px]  blur-sm h-[200px]' src="./pngkit_tmobile-logo-png_2226110.png" alt="" /> */}
        {/* <TbPlus size={38} color='white' className='absolute border-2 hover:shadow  cursor-pointer rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' /> */}

      </div>

    </div>




  </div>
  )
}

export default SimCards