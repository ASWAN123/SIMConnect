import React from 'react'
import {
    AiFillTwitterCircle,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillFacebook,
    AiFillGithub,
  } from "react-icons/ai";
import Logo from './Logodesign';


const Footer = () => {
  return (
    <footer className=" p-4 flex flex-col gap-4 w-full  bg-gradient-to-br from-green-400 to-blue-600 rounded-md mb-2 ">
    <div className="flex justify-between ">
      <Logo />
      <ul className="flex gap-4  ">
        <li>
          <AiFillGithub size={24} color="white" />
        </li>
        <li>
          <AiFillFacebook size={24} color="white" />
        </li>
        <li>
          <AiFillLinkedin size={24} color="white" />
        </li>
        <li>
          <AiFillInstagram size={24} color="white" />
        </li>
        <li>
          <AiFillTwitterCircle size={24} color="white" />
        </li>
      </ul>
    </div>
    <div className=" w-[60%] mx-auto flex gap-4 items-center justify-between ">
      <ul className=" w-[50%] flex flex-col gap-4  ">
        <li className="hover:cursor-pointer  text-white">
          <a>Discover</a>
        </li>
        <li className="hover:cursor-pointer  hover:text-white">
          <a>About Us</a>
        </li>
        <li className="hover:cursor-pointer  hover:text-white">
          <a>Activation & Setup</a>
        </li>
        <li className="hover:cursor-pointer  hover:text-white">
          <a>Plans & Pricing</a>
        </li>
        <li className="hover:cursor-pointer  hover:text-white">
          <a>Support & FAQs</a>
        </li>
      </ul>
      <form className=" w-[50%] " action="">
        <div id="ground" className="flex gap-2 flex-col ">
          <p className="text-[18px] font-semibold text-center text-white">
            If you have any questions, feel free to get in touch with us.
          </p>
          <input
            className=" outline-none  h-8 placeholder:text-gray-400 text-[14px] px-2 py-1 bg-gray-200   rounded-md  "
            type="Email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <textarea
            placeholder="Write a message ..."
            className=" placeholder:text-gray-400 text-[14px] px-2 py-1 bg-gray-200 outline-none  rounded-md "
            name="message"
            id="message"
            cols="10"
            rows="5"
          ></textarea>
        </div>
        <input type="submit" className="bg-gray-200 w-full text-black py-2 px-6 mt-4 rounded-md" name="submit" id="submit" />
      </form>
    </div>
  </footer>
  )
}

export default Footer