import React from "react";
import Logo from "../Logo";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import  {   LiaSimplybuilt  } from 'react-icons/lia'
const Dashheader = () => {
  const location = useLocation();
  let path = location.pathname;

  const linksData = [
    { to: "/account", text: "Dashboard" },
    { to: "/account/orders", text: "Orders" },
    { to: "/account/Setting", text: "Setting" },
    { to: "/account/profile", text: "profile" },
    // { to: "/account/profile", text: "Profile" },

  ];

  return (
    <header className="min-h-[70px]  flex flex-col gap-4    pt-2 sticky top-0 w-full z-10  bg-[#f9f9f9] ">
      <div className="w-full flex gap-4 justify-between items-center ">
        <Logo />
        <button
          type="button"
          className="flex items-center justify-center gap-2 text-white bg-blue-500  hover:bg-gradient-to-bl font-medium rounded-md text-sm px-5 py-2 text-center "
        >
          Live Support{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
        </button>

        {/* Contact us */}
        {/* </button> */}
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
          <button className="ml-auto text-red-300  cursor-pointer ">Log Out</button>
        </div>
      </div>
    </header>
  );
};

export default Dashheader;
