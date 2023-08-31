import React from 'react'
import Main from "./LandingFolder/Main"
import Features from "./LandingFolder/Features"
import Choose from "./LandingFolder/Choose"
import Pricing from "./LandingFolder/Pricing"
import Logo from './Logo'

function LandingPage() {
  return (
    <main className="border-green-500 px-2 ">

    {/* main jsx */}
    <Main />
    
    {/* features jsx */}
    <Features />


    {/* choose jsx */}
    <Choose />


    {/* pricing */}
    <Pricing />

    {/* footer */}

    <footer className='mt-8 p-4 bg-gray-800 text-white flex gap-4 justify-between mb-8 rounded-md'>
        <div className=' flex-1 flex flex-col gap-4 '>
            <Logo/>
            <p className='text-[14px] pl-4'>Join the SIMConnect revolution today and unlock a world of unparalleled connectivity. Whether it's for business, travel, or everyday use, trust us to keep you connected effortlessly.</p>
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
            <textarea placeholder='write a message ...' className='py-1 bg-gray-200 outline-none h-12 rounded-md px-2 ' name="message" id="" cols="" rows="3"></textarea>
            <div className='flex gap-2 justify-between'>
                <input className='bg-gray-200 outline-none h-8 rounded-md px-2 ' type="text" name="email" id="email" placeholder='Email' />
                <input type="submit" name="" id="" value="Send" className='bg-green-400 mx-auto px-6 py-1 rounded-md ' />
                </div>
            </form>
        </div>
    </footer>



  </main>
  )
}

export default LandingPage