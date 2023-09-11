import React from 'react'
import { MdAccountCircle} from "react-icons/md"
import Logo from '../Logo'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <header className="min-h-[70px] max-h-[70px] py-2 flex gap-4 items-center justify-between  text-[14px] sticky top-0 w-full z-10 border-b bg-[#fcfffa]">
    <Logo/>
    <ul className="flex gap-4 text-gray-600">
        <li className="hover:cursor-pointer hover:text-blue-400"><a href="#pricing">Discover</a></li>
        <li className="hover:cursor-pointer hover:text-blue-400">Activation & Setup</li>
        <li className="hover:cursor-pointer hover:text-blue-400">Plans & Pricing</li>
        <li className="hover:cursor-pointer hover:text-blue-400">Features</li>
        <li className="hover:cursor-pointer hover:text-blue-400">Support & FAQs</li>
    </ul>
    <Link to="/login" className="text-gray-800 py-1 px-4 rounded-md capitalize flex items-center gap-2"><MdAccountCircle size={26} /> member area</Link>

</header>
  )
}

export default Header
