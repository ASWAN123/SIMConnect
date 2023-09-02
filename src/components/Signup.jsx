import React, { useState } from 'react'
import { useForm } from "react-hook-form" ;
import { createUserWithEmailAndPassword } from "firebase/auth" ;
import {  useContextData } from '../ContextData' ;



//react-hook-form

function Signup() {
    const  { db , auth } = useContextData()
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(auth)
        await createUserWithEmailAndPassword(auth, data.Email, data.Password )
        .then((userCredential) => {
            const user = userCredential.user;
            let dataclone = {...data}
            delete dataclone.Password
            db.collection('simconnect').doc(user.uid).set({'user':{...dataclone}})
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode ,  errorMessage)
            
        });
    }





    return (
        <div className='min-w-[350px] max-w-[350px]  mx-auto mt-12 '>
            <form action="" onSubmit={handleSubmit(onSubmit)} className=' flex flex-col gap-2'>
                <p className='text-center text-[20px] mb-4  text-gray-600'>Register An Account</p>

                <div className='flex gap-2 '>
                    <input {...register("First_name")} type='text' placeholder='First Name' className='  placeholder:text-[14px] placeholder:text-gray-400 capitalize text-[14px] text-gray-500 w-[50%] outline-none bg-transparent px-2 py-1 h-10 border rounded-sm'  />
                    <input {...register("Last_name")} type='text'  placeholder='Last Name' className=' placeholder:text-[14px] placeholder:text-gray-400  capitalize text-[14px] text-gray-500 w-[50%] outline-none bg-transparent px-2 py-1 h-10 border rounded-sm'  />
                </div>

                <input {...register("Email")} type='email' placeholder='Email' className=' placeholder:text-[14px] placeholder:text-gray-400   text-[14px] text-gray-500 outline-none bg-transparent px-2 py-1 h-10 border rounded-sm'  />
                <input {...register("Password")} type='password'  placeholder='Password' className=' placeholder:text-[14px] placeholder:text-gray-400   text-[14px] text-gray-500 outline-none bg-transparent px-2 py-1 h-10 border rounded-sm' />
                <input {...register("City")} type='text' placeholder='City' className=' placeholder:text-[14px] placeholder:text-gray-400  capitalize text-[14px] text-gray-500 outline-none bg-transparent px-2 py-1 h-10 border rounded-sm'  />
                <input {...register("Zipcode")} type='number' placeholder='Zipcode' className=' placeholder:text-[14px] placeholder:text-gray-400   text-[14px] text-gray-500 outline-none bg-transparent px-2 py-1 h-10 border rounded-sm'  />
                <input {...register("Address")} type='text'  placeholder='Address' className=' placeholder:text-[14px] placeholder:text-gray-400  capitalize text-[14px] text-gray-500 outline-none bg-transparent px-2 py-1 h-10 border rounded-sm'  />
                <input {...register("Phone")} type='tel' placeholder='Phone (212)456-7890' className=' placeholder:text-[14px] placeholder:text-gray-400  capitalize text-[14px] text-gray-500 outline-none bg-transparent px-2 py-1 h-10 border rounded-sm'  />
                <div className='flex gap-1 mt-2'>
                    <input {...register("AcceptTerms")} type="checkbox" name="AcceptTerms" id="AcceptTerms" />
                    <p className='text-[14px] text-gray-600'>Accept terms and conditions</p>
                </div>
                <input className='bg-green-400 px-3 py-2 rounded-sm mt-2 hover:cursor-pointer ' type="submit" value="Sign up" />
            </form>
        </div>
    )
}

export default Signup