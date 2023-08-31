import React, { useState } from 'react'


function Signup() {
    const  [ userinfo , setUserinfo] = useState({
        'First_name':'' ,
        'Last_name':'',
        'Email':'',
        'Password':'',
        'City':'',
        'Zipcode':'',
        'Address':'',
        'Phone':''
    })

    const  Handleregister  = (e) => {
        e.preventDefault() ;
        let  checker = userinfo.value()
        console.log(checker)

        
    }


    return (
        <div className='min-w-[350px] max-w-[350px]  mx-auto mt-12 '>
            <form action="" onSubmit={Handleregister} className=' flex flex-col gap-2'>
                <p className='text-center text-[20px] mb-4  text-gray-600'>Register An Account</p>

                 <div className='flex gap-2 '>
                    <input value={userinfo.First_name} onChange={(e) => {setUserinfo({...userinfo , First_name:e.target.value })}} placeholder='First Name' className=' capitalize text-[14px] text-gray-500 w-[50%] outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' type="text" name="First_Name" id="First_Name" />
                    <input value={userinfo.Last_name} onChange={(e) => {setUserinfo({...userinfo , Last_name:e.target.value})}} placeholder='Last name' className=' capitalize text-[14px] text-gray-500 w-[50%] outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' type="text" name="Last_name" id="Last_name" />
                </div>

                <input value = {userinfo.Email} onChange={(e) => {setUserinfo({...userinfo , Email:e.target.value})}} placeholder='Email' className=' capitalize text-[14px] text-gray-500 outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' type="Email" name="Email" id="Email" />
                <input value = {userinfo.Password} onChange={(e) => {setUserinfo({...userinfo , Password:e.target.value})}} placeholder='Password' className=' capitalize text-[14px] text-gray-500 outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' type="Password" name="password" id="password" />
                <input value = {userinfo.City} onChange={(e) => {setUserinfo({...userinfo , City:e.target.value})}} placeholder='City' className=' capitalize text-[14px] text-gray-500 outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' type="City" name="City" id="City" />
                <input value = {userinfo.Zipcode} onChange={(e) => {setUserinfo({...userinfo , Zipcode:e.target.value})}} placeholder='Zipcode' className=' capitalize text-[14px] text-gray-500 outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' type="Zipcode" name="Zipcode" id="Zipcode" />
                <input value = {userinfo.Address} onChange={(e) => {setUserinfo({...userinfo , Address:e.target.value})}} placeholder='Address' className=' capitalize text-[14px] text-gray-500 outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' type="address" name="adaddress" id="address" />
                <input value = {userinfo.Phone} onChange={(e) => {setUserinfo({...userinfo , Phone:e.target.value})}} placeholder='Phone (212)456-7890' className=' capitalize text-[14px] text-gray-500 outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' type="phone" name="phone" id="phone" />
                <input className='bg-green-400 px-3 py-1 rounded-sm mt-4 hover:cursor-pointer ' type="submit" value="Sign up" />

            </form>
        </div>
    )
}

export default Signup