import React from 'react'
import { MdAccountCircle} from "react-icons/md"
import Logo from '../Logo'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <header className=" border-b border-b-gray-100 flex gap-4 items-center justify-between py-4 sticky top-0 w-full z-10 bg-[#fcf8fb]">
    <Logo/>
    <ul className="flex gap-4">
        <li className="hover:cursor-pointer hover:text-blue-400"><Link to="#pricing">Discover</Link></li>
        <li className="hover:cursor-pointer hover:text-blue-400">Activation & Setup</li>
        <li className="hover:cursor-pointer hover:text-blue-400">Plans & Pricing</li>
        <li className="hover:cursor-pointer hover:text-blue-400">Features</li>
        <li className="hover:cursor-pointer hover:text-blue-400">Support & FAQs</li>
    </ul>
    <Link to="/login" className="text-blue-800 capitalize flex items-center gap-2"><MdAccountCircle size={26} /> member area</Link>

</header>
  )
}

export default Header