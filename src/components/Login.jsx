import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {BiShow} from 'react-icons/bi'

function Login() {
    const [ email , setEmail]  = useState('')
    const [password , setPassword] = useState('')
    const [ showPassword , setShowPassword ] = useState(false)




    return (
        <div className='min-w-[350px] max-w-[350px] mt-12  mx-auto  '>
            <form action="" className=' flex flex-col gap-2'>
                <p className='text-center text-[20px] mb-4 text-black'>Log Into Your Account</p>
                
                <input placeholder='Email' className=' w-full placeholder:text-[14] placeholder:text-gray-400 outline-none bg-transparent px-2 py-1 h-10 border rounded-sm' value={email} onChange={(e) => {setEmail(e.target.value)}} type="Email" name="email" id="email" />
                

                <input placeholder='Password' className=' w-full placeholder:text-[14] placeholder:text-gray-400 outline-none bg-transparent px-2 py-1 h-10 border rounded-sm' value={password} onChange = { (e) => {setPassword(e.target.value)} } type={ showPassword ? "Word" : "Password" } name="password" id="password" />
                <p onClick={()=> {setShowPassword(!showPassword)}} className=' hover:cursor-pointer text-gray-500 text-[12px] ml-1 mr-auto flex gap-1 items-center'><BiShow /> Show password</p>
                <input className='bg-green-400 px-6 py-2 rounded-sm mt-2 hover:cursor-pointer ' type="submit" value="Log in"/>
            </form>
            
            <div className='flex flex-col gap-2 items-start mt-4 text-[14px]'>
                <p>forget password ?</p>
                <div className='flex gap-1 items-center'>
                    <p>Don't have an account ? </p>
                    <Link to="/Signup" className='text-blue-600 py-1 rounded-sm ' >Sign up</Link>
                </div>
                
            </div>
        </div>
    )
    }

export default Login
