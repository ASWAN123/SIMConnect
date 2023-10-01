import React from "react";
import Logo from "../Logo";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {  signOut } from "firebase/auth";
import  {   LiaSimplybuilt  } from 'react-icons/lia'
import { useContextData } from "../../ContextData";
const Dashheader = () => {
  const location = useLocation();
  let path = location.pathname;
  const  { auth } = useContextData()
  let navigate  = useNavigate()

  const linksData = [
    { to: "/account", text: "Dashboard" },
    { to: "/account/orders", text: "Orders" },
    { to: "/account/Setting", text: "Setting" },
    { to: "/account/profile", text: "profile" },
  ];


const logout = async () => {
  let x  = await signOut(auth).then(() => {
    // Sign-out successful.
    navigate("/login")
  }).catch((error) => {
    navigate('/error')
  });
}


  return (
    <header className="min-h-[70px]  flex flex-col gap-4    pt-3 sticky top-0 w-full z-10  bg-[#f9f9f9] ">
      <div className="w-full flex gap-4 justify-between items-center ">
        <Logo />
      </div>
      <div>
        <div className="  rounded-t-sm  bg-[#000435] p-2 flex gap-4 basis-1  mr-auto text-[14px] text-gray-600 ">
          {linksData.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className={
                path === link.to
                  ? "bg-gray-100 text-center basis-[100px] px-1 py-1 rounded-sm cursor-pointer"
                  : "cursor-pointer text-center basis-[100px] px-1 py-1 text-white "
              }
            >
              {link.text}
            </Link>
            
          ))}
          <button onClick={logout} className="ml-auto text-white  cursor-pointer ">Log Out</button>
        </div>
      </div>
    </header>
  );
};

export default Dashheader;
