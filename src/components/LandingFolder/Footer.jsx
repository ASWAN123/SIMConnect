import React from 'react'
import Logo from '../Logo'
import {
    AiFillTwitterCircle,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillFacebook,
    AiFillGithub,
  } from "react-icons/ai";

function Footer() {
  return (
    <footer className='mt-8 p-4 bg-[#000435] text-gray-50 flex gap-4 justify-between mb-8 rounded-md'>
    <div className=' flex-1 flex flex-col gap-4 items-center  justify-center '>
        <Logo color= {'white'} />
        <div className='flex gap-2 px-2 ml-4 rounded-md w-fit '>
            <AiFillTwitterCircle size={26}  color='#1DA1F2' className='hover:cursor-pointer '/>
            <AiFillInstagram size={26}  color='#C13584' className='hover:cursor-pointer '/>
            <AiFillLinkedin size={26}  color='#0077b5' className='hover:cursor-pointer '/>
            <AiFillFacebook size={26}  color='#1877F2' className='hover:cursor-pointer '/>
            <AiFillGithub size={26}  color='#4078c0' className='hover:cursor-pointer '/>
        </div>
    </div>
    <div className=' flex-1 flex flex-col gap-4 '>
        <p className=' font-semibold text-[18px] text-center '>Contact Us</p>
        <div className=' flex flex-col gap-2 pl-4 text-[14px]'>
        <p>Email: info@example.com</p>
        <p>Phone: +123-456-7890</p>

        <p>Address:
        123 Main Street,
        Cityville, Country</p>
        </div>
    </div>
    <div className='flex-1 flex flex-col gap-4 '>
        <p className='font-semibold text-[18px] text-center '>Links</p>
        <ul className="flex flex-col gap-2 items-center text-[14px]">
            <li className="hover:cursor-pointer hover:text-blue-400">Discover</li>
            <li className="hover:cursor-pointer hover:text-blue-400">Activation & Setup</li>
            <li className="hover:cursor-pointer hover:text-blue-400">Plans & Pricing</li>
            <li className="hover:cursor-pointer hover:text-blue-400">Features</li>
            <li className="hover:cursor-pointer hover:text-blue-400">Support & FAQs</li>
        </ul>
    </div>
    <div className='flex-1 flex flex-col gap-4'>
        <p className='font-semibold text-[18px] text-center'>Support</p>
        <p className='text-[14px] '>Feel free to get in touch with us if you have any questions, suggestions, or inquiries. We're here to help!</p>

        <form action="" className='flex flex-col gap-2 text-black text-[14px]'>
        <textarea placeholder='write a message ...' className=' resize-none py-1 bg-gray-50 outline-none h-12 rounded-md px-2' name="message" id="" cols="" rows="3"></textarea>
        <div className='flex gap-2 justify-between'>
            <input className='bg-gray-50 outline-none h-8 rounded-md px-2 ' type="text" name="email" id="email" placeholder='Email' />
            <input type="submit" name="" id="" value="Send" className='bg-green-400 mx-auto px-6 py-1 rounded-md ' />
            </div>
        </form>
    </div>
</footer>
  )
}

export default Footer