import React, { useState } from 'react'


function Signup() {


    return (
        <div className='min-w-[350px] max-w-[350px]  mx-auto mt-12 '>
            <form action="" className=' flex flex-col gap-2'>
                <p className='text-center text-[20px] mb-4  text-gray-600'>Register An Account</p>

                <div className='flex gap-2 '>
                    <input placeholder='First Name' className=' capitalize text-[14px] text-gray-500 w-[50%] outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' type="text" name="First_Name" id="First_Name" />
                    <input placeholder='Last name' className=' capitalize text-[14px] text-gray-500 w-[50%] outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' type="text" name="Last_name" id="Last_name" />
                </div>

                <input placeholder='Email' className=' capitalize text-[14px] text-gray-500 outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' type="Email" name="Email" id="Email" />
                <input placeholder='Password' className=' capitalize text-[14px] text-gray-500 outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' type="Password" name="password" id="password" />
                <input placeholder='City' className=' capitalize text-[14px] text-gray-500 outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' type="City" name="City" id="City" />
                <input placeholder='Zipcode' className=' capitalize text-[14px] text-gray-500 outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' type="Zipcode" name="Zipcode" id="Zipcode" />
                <input placeholder='Address' className=' capitalize text-[14px] text-gray-500 outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' type="address" name="adaddress" id="address" />
                <input placeholder='Phone (212)456-7890' className=' capitalize text-[14px] text-gray-500 outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' type="phone" name="phone" id="phone" />
                <input className='bg-green-400 px-3 py-1 rounded-sm mt-4 hover:cursor-pointer ' type="submit" value="Sign up" />

            </form>
        </div>
    )
}

export default Signup