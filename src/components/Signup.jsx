import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Signup() {
    const [ email , setEmail]  = useState('')
    const [password , setPassword] = useState('')

    return (
        <div className='min-w-[350px] max-w-[350px]  mx-auto mt-12 '>
            <form action="" className=' flex flex-col gap-2'>
                <p className='text-center text-[20px] mb-4 '>Register an account</p>
                <div className='flex gap-2 '>
                    <input placeholder='First Name' className='w-[50%] outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' type="text" />
                    <input placeholder='Last name' className='w-[50%] outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' type="text" name="" id="" />
                </div>
                <div className='flex flex-col gap-2'>
                    <input placeholder='Email' className='outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' value={email} onChange={(e) => {setEmail(e.target.value)}} type="Email" name="email" id="email" />
                </div>
                <div className='flex flex-col gap-2'>
                    
                    <input placeholder='Password' className='outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' value={password} onChange = { (e) => {setPassword(e.target.value)} } type="Password" name="password" id="password" />
                </div>
                <div className='flex flex-col gap-2'>
                    <input placeholder='City' className='outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' value={password} onChange = { (e) => {setPassword(e.target.value)} } type="Password" name="password" id="password" />
                    <input placeholder='Zipcode' className='outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' value={password} onChange = { (e) => {setPassword(e.target.value)} } type="Password" name="password" id="password" />
                    <input placeholder='Address' className='outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' value={password} onChange = { (e) => {setPassword(e.target.value)} } type="Password" name="password" id="password" />
                </div>

                <div className='flex flex-col gap-2'>
                    
                    <input placeholder='Phone (212)456-7890' className='outline-none bg-transparent px-2 py-1 h-8 border rounded-sm' value={password} onChange = { (e) => {setPassword(e.target.value)} } type="Password" name="password" id="password" />
                </div>

                <input className='bg-green-400 px-3 py-1 rounded-sm mt-4 hover:cursor-pointer ' type="submit" value="Sign up"/>
            </form>
            <div className='flex flex-col gap-2 items-center mt-4'>
                <p>or</p>
                <Link to="/login" className='text-blue-400 px-3 py-1 rounded-sm ' >Login in</Link>
            </div>
        </div>
  )
}

export default Signup