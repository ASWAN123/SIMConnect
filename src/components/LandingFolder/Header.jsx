import React from 'react'
import { MdAccountCircle} from "react-icons/md"
import Logo from '../Logo'



const Header = () => {
  return (
    <header className="py-2 flex gap-4 items-center justify-between">
    <Logo/>
    <ul className="flex gap-4">
        <li className="hover:cursor-pointer hover:text-blue-400">Discover</li>
        <li className="hover:cursor-pointer hover:text-blue-400">Activation & Setup</li>
        <li className="hover:cursor-pointer hover:text-blue-400">Plans & Pricing</li>
        <li className="hover:cursor-pointer hover:text-blue-400">Features</li>
        <li className="hover:cursor-pointer hover:text-blue-400">Support & FAQs</li>
    </ul>
    <button className="text-blue-800 capitalize flex items-center gap-2"><MdAccountCircle size={26} /> member area</button>

</header>
  )
}

export default Header
