import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [ email , setEmail]  = useState('')
    const [password , setPassword] = useState('')




    return (
        <div className='min-w-[350px] max-w-[350px] mt-12  mx-auto'>
            <form action="" className=' flex flex-col gap-2'>
                <p className='text-center text-[20px] mb-4 text-gray-600'>Log Into Your Account</p>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email" className='text-gray-400'>Email</label>
                    <input className='outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' value={email} onChange={(e) => {setEmail(e.target.value)}} type="Email" name="email" id="email" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="password" className='text-gray-400'>Password</label>
                    <input className='outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' value={password} onChange = { (e) => {setPassword(e.target.value)} } type="Password" name="password" id="password" />
                </div>
                <input className='bg-green-400 px-3 py-1 rounded-sm mt-4 hover:cursor-pointer ' type="submit" value="Log in"/>
            </form>
            <p className='text-[14px] text-blue-600 mt-1'>Forget password ?</p>
            <div className='flex flex-col gap-2 items-center mt-4'>
                <p>or</p>
                <Link to="/Signup" className='text-blue-600 px-3 py-1 rounded-sm ' >Sign up</Link>
            </div>
        </div>
    )
    }

export default Login
