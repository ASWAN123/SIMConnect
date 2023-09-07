import React from 'react'
import Logo from '../Logo'
import { IoMdNotifications } from "react-icons/io"
import { FaUserCircle } from "react-icons/fa"
import { Link, useLocation } from 'react-router-dom'
const Dashheader = () => {
    const  location = useLocation()
    let path  = location.pathname
    console.log(path)



    return (
        <header className='min-h-[70px] max-h-[70px] flex gap-2 items-center justify-between  border-b py-2 '>
            <Logo />
            <div className='flex gap-4  ml-4 text-[14px] text-gray-600'>
                <Link to='' className={path === '/dashboard' ? 'text-blue-500 cursor-pointer' : 'cursor-pointer  '}>Dashboard</Link>
                <Link to='orders' className={path === '/dashboard/orders' ? 'text-blue-500 cursor-pointer' : 'cursor-pointer  '}>Orders</Link>
                <Link to='sim-card-management' className={path === '/dashboard/sim-card-management' ? 'text-blue-500 cursor-pointer' : 'cursor-pointer  '} >SIM Card Management</Link>
                <Link to='billing-history' className={path === '/dashboard/billing-history' ? 'text-blue-500 cursor-pointer' : 'cursor-pointer  '}>Billing History</Link>
                <Link to='network-coverage-map' className={path === '/dashboard/network-coverage-map' ? 'text-blue-500 cursor-pointer' : 'cursor-pointer  '}>Network Coverage Map</Link>
                <Link to='devices' className={path === '/dashboard/devices' ? 'text-blue-500 cursor-pointer' : 'cursor-pointer  '}>My Devices</Link>
                <Link to='refer-a-friend' className={path === '/dashboard/refer-a-friend' ? 'text-blue-500 cursor-pointer' : 'cursor-pointer  '}>Refer-a-Friend</Link>
            </div>
            <div className='flex gap-8 items-center '>
                <IoMdNotifications size={30} color='#000435' className='   rounded-full cursor-pointer' />
                <FaUserCircle size={30} color='#000435' className='   rounded-full cursor-pointer '  />
            </div>
        </header>
    )
}

export default Dashheader