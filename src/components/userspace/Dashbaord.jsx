import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from "react-router-dom";

import Dashheader from './Dashheader'

import Accountsummary from './Accountsummary'
import Todayusage from './Todayusage'
import SimCards from './SimCards'
import { IoChatboxEllipsesSharp} from 'react-icons/io5'



const Dashbaord = () => {



 


  return (
    <div className='text-[14px] relative '>

      <Dashheader />

      <div id="main" className=""><Outlet /></div>




      <IoChatboxEllipsesSharp size={50} color="blue" className='fixed bottom-4 right-10 cursor-pointer ' />








    </div>
  )
}

export default Dashbaord