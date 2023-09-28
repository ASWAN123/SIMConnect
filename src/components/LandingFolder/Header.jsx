import React from 'react'
import { MdAccountCircle} from "react-icons/md"
import Logo from '../Logo'
import { Link } from 'react-router-dom'


//bg-[#f9f9f9]
const Header = () => {
  return (
    <header className=" container mx-auto bg-[#F5F5F5]  px-4 text-gray-600 min-h-[80px]  max-h-[80px] py-2 flex gap-4 items-center justify-between  text-[14px] sticky top-0 w-full z-10  ">
    <Logo  color={'black'}/>
    <ul className="flex gap-4   ">
        <li className="hover:cursor-pointer hover:text-blue-400">Discover</li>
        <li className="hover:cursor-pointer hover:text-blue-400">Activation & Setup</li>
        <li className="hover:cursor-pointer hover:text-blue-400">Plans & Pricing</li>
        <li className="hover:cursor-pointer hover:text-blue-400">Features</li>
        <li className="hover:cursor-pointer hover:text-blue-400">Support & FAQs</li>
    </ul>
    <div className='flex gap-4 text-white  '>
    <Link to="/login" className="  bg-green-400 px-6 py-2 text-gray-50 rounded-full capitalize flex items-center gap-2">Sign in</Link>
    <Link to="/signup" className=" bg-blue-400 px-6 py-2 text-gray-50 rounded-full capitalize flex items-center gap-2">Sign up</Link>
    </div>
</header>
  )
}

export default Header
