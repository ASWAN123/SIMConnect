import React from 'react'
import Logo from '../Logo'
import { CiBellOn } from "react-icons/ci"
import { PiUserCircleThin } from "react-icons/pi"
const Dash_Header = () => {
    return (
        <header className='flex gap-2 items-center justify-between  border-b py-2 '>
            <Logo />
            <div className='flex gap-4  ml-4 text-[14px] text-gray-600'>
                <div className='cursor-pointer  '>Dashboard</div>
                <div className='cursor-pointer hover:text-blue-500 '>Orders</div>
                <div className='cursor-pointer hover:text-blue-500' >SIM Card Management</div>
                <div className='cursor-pointer hover:text-blue-500 '>Billing History</div>
                <div className='cursor-pointer hover:text-blue-500 '>Network Coverage Map</div>
                <div className='cursor-pointer hover:text-blue-500 '>My Devices</div>
                <div className='cursor-pointer hover:text-blue-500 '>Refer-a-Friend</div>
            </div>
            <div className='flex gap-8 items-center '>
                <CiBellOn size={30} color='white' className='bg-gray-400 rounded-full cursor-pointer' />
                <PiUserCircleThin size={30} color='white' className='bg-gray-400 rounded-full cursor-pointer'  />
            </div>
        </header>
    )
}

export default Dash_Header