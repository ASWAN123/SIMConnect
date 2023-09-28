import React from "react";
import Logo from "../Logo";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
const Dashheader = () => {
  const location = useLocation();
  let path = location.pathname;

  const linksData = [
    { to: "/account", text: "Dashboard" },
    { to: "/account/orders", text: "Orders" },
    { to: "/account/Setting", text: "Setting" },
    // { to: "/account/billing-history", text: "Billing History" },
    // { to: "/account/network-coverage-map", text: "Network Coverage Map" },
    { to: "/account/profile", text: "Profile" },
    { to: "/account/refer-a-friend", text: "Refer-a-Friend" },
  ];

  return (
    <header className="min-h-[70px] max-h-[70px] flex gap-2 items-center  justify-between  border-b py-2 sticky top-0 w-full z-10  bg-[#f5f5f5] ">
      <Logo />
      <div className=" flex gap-4  ml-8 mr-auto text-[14px] text-gray-600 ">
        {linksData.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className={
              path === link.to
                ? "text-blue-500 cursor-pointer"
                : "cursor-pointer hover:text-blue-500"
            }
          >
            {link.text}
          </Link>
        ))}
      </div>
      {/* <div className="flex gap-8 items-center "> */}

        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg> */}

        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg> */}
      {/* </div> */}
      <div>
        <button className="px-6 py-2 bg-green-500 text-white rounded-sm">Contact us</button>
      </div>
    </header>
  );
};

export default Dashheader;
