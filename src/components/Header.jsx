import React from "react";
import Logo from "./Logodesign";

const Header = () => {
    return (
        <header className="flex items-center  gap-6 py-3 justify-between  bg-[#eee] sticky z-10 top-0 ">
            {/* logo */}
            <Logo />
            

            {/* nav bar */}
            <ul className="flex flex-2 gap-6 mr-8  ">
                <li className="hover:cursor-pointer  text-blue-400"><a href="#discover">Discover</a></li>
                <li className="hover:cursor-pointer  hover:text-blue-400"><a>Features</a></li>
                <li className="hover:cursor-pointer  hover:text-blue-400"><a>Activation & Setup</a></li>
                <li className="hover:cursor-pointer  hover:text-blue-400"><a href="#pricing" >Plans & Pricing</a></li>
                <li className="hover:cursor-pointer  hover:text-blue-400"><a>Support & FAQs</a></li>
            </ul>

            {/* access account */}
            <button className=" text-white shadow-lg bg-gradient-to-br from-pink-500 to-orange-400 py-2 px-4 rounded-full ">
                Member Area
            </button>
        </header>
    );
};

export default Header;
