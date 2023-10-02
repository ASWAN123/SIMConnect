import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Errorpage = () => {
  const location = useLocation()
  



  return (
    <div className=' h-screen w-full relative'>
            <div className='absolute top-1/2 left-1/2 transform   -translate-x-1/2 -translate-y-1/2 flex items-center flex-col gap-4  justify-center'>
                <img className='w-[400px]'  src="./images/error.gif" alt="" />
                <p className='text-lg'>something really bad happend </p>
                {location?.state && <p>{location.state}</p>}
                <Link to="/SIMConnect" className='px-6 py-2 rounded-md bg-green-500 '>Home</Link>
            </div>
      
    </div>
  )
}

export default Errorpage
