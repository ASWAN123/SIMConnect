import React from 'react'
import { MdAccountCircle} from "react-icons/md"
import Logo from '../Logo'
import { Link } from 'react-router-dom'


//bg-[#f9f9f9]
const Header = () => {
  return (
    <header className=" bg-[#f9f9f9] text-gray-600 min-h-[70px] max-h-[70px] py-2 flex gap-4 items-center justify-between  text-[14px] sticky top-0 w-full z-10  ">
    <Logo />
    <ul className="flex gap-4  ">
        <li className="hover:cursor-pointer hover:text-blue-400"><a href="#pricing">Discover</a></li>
        <li className="hover:cursor-pointer hover:text-blue-400">Activation & Setup</li>
        <li className="hover:cursor-pointer hover:text-blue-400">Plans & Pricing</li>
        <li className="hover:cursor-pointer hover:text-blue-400">Features</li>
        <li className="hover:cursor-pointer hover:text-blue-400">Support & FAQs</li>
    </ul>
    <div className='flex gap-4 text-white  '>
    <Link to="/login" className="  hover:bg-blue-400 px-4 py-1  hover:text-gray-50 text-gray-600 rounded-sm capitalize flex items-center gap-2">Sign in</Link>
    <Link to="/signup" className=" hover:bg-blue-400 px-4 py-1 hover:text-gray-50 text-gray-600 rounded-sm capitalize flex items-center gap-2">Sign up</Link>
    </div>
</header>
  )
}

export default Header
