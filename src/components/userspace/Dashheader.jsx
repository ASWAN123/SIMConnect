import React from 'react'
import Logo from '../Logo'
import { IoMdNotifications } from "react-icons/io"
import { FaUserCircle } from "react-icons/fa"
import { Link, useLocation } from 'react-router-dom'
const Dashheader = () => {
    const  location = useLocation()
    let path  = location.pathname
    
    const linksData = [
        { to: '/account', text: 'Dashboard' },
        { to: '/account/orders', text: 'Orders' },
        { to: '/account/sim-card-management', text: 'SIM Card Management' },
        { to: '/account/billing-history', text: 'Billing History' },
        { to: '/account/network-coverage-map', text: 'Network Coverage Map' },
        { to: '/account/devices', text: 'My Devices' },
        { to: '/account/refer-a-friend', text: 'Refer-a-Friend' },
      ];



    return (
        <header className='min-h-[70px] max-h-[70px] flex gap-2 items-center justify-between  border-b py-2 '>
            <Logo />
            <div className='flex gap-4  ml-4 text-[14px] text-gray-600'>

            {linksData.map((link, index) => (
                <Link
                    key={index}
                    to={link.to}
                    className={ path === link.to ? 'text-blue-500 cursor-pointer' : 'cursor-pointer'}
                >
                    {link.text}
                </Link>
                ))}
                
 
            </div>
            <div className='flex gap-8 items-center '>
                <IoMdNotifications size={30} color='#000435' className='   rounded-full cursor-pointer' />
                {/* <FaUserCircle size={30} color='#000435' className='   rounded-full cursor-pointer '  /> */}
                <img src="/profileicon.png" className='w-[34px]' alt="" />
            </div>
        </header>
    )
}

export default Dashheader