import React, { useEffect } from 'react'
import Logo from '../Logo'
import { Link, useLocation } from 'react-router-dom'



const Header = ({isLoggedIn}) => {
  const location = useLocation()
  const path  = location.pathname 

  const gotop = () => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });

  }

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,

    })

  } , [])


  return (
    <header className=" container mx-auto bg-[#F9F9F9]  px-4 text-gray-600 min-h-[80px]  max-h-[80px] py-2 flex gap-4 items-center justify-between  text-[14px] sticky top-0 w-full z-10  ">
    <Logo  color={'black'}/>
    { (path !== '/signup' && path !== "/login") && <ul className="flex gap-4 ml-auto mr-8  ">
        <li className="hover:cursor-pointer hover:text-blue-400" onClick={gotop}>Discover</li>
        <li className="hover:cursor-pointer hover:text-blue-400" id="scrollToPricing" ><a href="#pricing">Plans & Pricing</a></li>
        <li className="hover:cursor-pointer hover:text-blue-400"><a href="#features">Features</a></li>
    </ul> }
    { !isLoggedIn && 
    <div className='flex gap-4 text-white  '>
    <Link to="/login" className="  bg-green-400 px-6 py-2 text-gray-50 rounded-full capitalize flex items-center gap-2">Sign in</Link>
    <Link to="/signup" className=" bg-blue-400 px-6 py-2 text-gray-50 rounded-full capitalize flex items-center gap-2">Sign up</Link>
    </div>
    }

    {
      isLoggedIn && <Link to="/account" className="  bg-green-400 px-6 py-2 text-gray-50 rounded-full capitalize flex items-center gap-2">Dashbaord</Link>
    }

</header>
  )
}

export default Header
