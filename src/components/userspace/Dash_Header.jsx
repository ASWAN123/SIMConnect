import React from 'react'
import Logo from '../Logo'
import { CiBellOn, CiUser } from "react-icons/ci"
import { PiUserCircleThin } from "react-icons/pi"
const Dash_Header = () => {
    return (
        <header className='flex gap-2 items-center justify-between  border-b py-2 '>
            <Logo />
            <div className='flex gap-4 mr-auto ml-4 text-[14px] text-gray-600'>
                <div className='cursor-pointer text-blue-400 '>Dashboard</div>
                <div className='cursor-pointer hover:text-blue-400 '>Orders</div>
                <div className='cursor-pointer hover:text-blue-400' >SIM Card Management</div>
                <div className='cursor-pointer hover:text-blue-400 '>Billing History</div>
                <div className='cursor-pointer hover:text-blue-400 '>Network Coverage Map</div>
                <div className='cursor-pointer hover:text-blue-400 '>My Devices</div>
                <div className='cursor-pointer hover:text-blue-400 '>Refer-a-Friend</div>
            </div>
            <div className='flex gap-8 items-center '>
                <CiBellOn size={30} color='white' className='bg-blue-300 rounded-full' />
                <PiUserCircleThin size={30} color='white' className='bg-gray-500 rounded-full'  />
            </div>
        </header>
    )
}

export default Dash_Header