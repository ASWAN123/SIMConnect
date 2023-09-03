import React from 'react'
import Logo from '../Logo'
import { CgProfile } from "react-icons/cg"
import  { MdOutline4GPlusMobiledata } from 'react-icons/md'
import {BiMessageRounded} from 'react-icons/bi'
import  { IoCallSharp } from 'react-icons/io5'

const Dashbaord = () => {




  return (
    <div>
      <header className='flex gap-2 items-center justify-between  border-b py-2 '>
        <Logo />
        <div className='flex gap-4 mr-auto ml-4 text-[14px] text-gray-600'>
          <div className='cursor-pointer '>Dashboard</div>

          <div className='cursor-pointer' >
            SIM Card Management
            {/* <div className='hover:bg-green-300'>
            <p  className='cursor-pointer shadow-none py-2 pl-2'>Billing History</p>
            <p  className='cursor-pointer shadow-none py-2 pl-2'>Plans and Services</p>
            <p  className='cursor-pointer shadow-none py-2 pl-2'>Usage History</p>
            <p  className='cursor-pointer shadow-none py-2 pl-2'>Network Coverage Map</p>
          </div> */}
          </div>

          <div className='cursor-pointer '>Settings</div>
          <div className='cursor-pointer '>My Devices</div>
          <div className='cursor-pointer '>Refer-a-Friend</div>
        </div>
        <div className='flex gap-8 '>
          <CgProfile size={34} color='gray' />
        </div>
      </header>

      {/* main */}
      <div className='mt-10 h-[300px] w-full  bg-[#40484f] rounded-md flex  gap-4 py-2 px-4 flex-col '>
        
        <div className='flex gap-4 items-center mt-2 ml-4  text-white text-[14px]'>
          <p className=' py-1 cursor-pointer border-b border-white '>All SIM Cards</p>
          <p className=' py-1 cursor-pointer '>Internet</p>
          <p className=' py-1 cursor-pointer '>Calls & Messages</p>
        </div>

        {/* cards */}
        <div className='flex gapp-4  items-center '>
          <div id='card' className='relative  top-0 left-0 ml-4 mt-2 rounded-lg text-[14px] flex flex-col '>
            <img className='w-[300px] h-[200px]' src="./pngkit_tmobile-logo-png_2226110.png" alt="" />
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

          <div id='card' className='relative  top-0 left-0 ml-4 mt-2 rounded-lg text-[14px] flex flex-col '>
            <img className='w-[300px] h-[200px]' src="./pngkit_tmobile-logo-png_2226110.png" alt="" />
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

          <div id='card' className='relative  top-0 left-0 ml-4 mt-2 rounded-lg text-[14px] flex flex-col '>
            <img className='w-[300px] h-[200px]' src="./pngkit_tmobile-logo-png_2226110.png" alt="" />
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

        </div>


      </div>
    </div>
  )
}

export default Dashbaord