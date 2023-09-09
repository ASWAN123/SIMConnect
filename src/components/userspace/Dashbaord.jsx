import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from "react-router-dom";

import Dashheader from './Dash_header'

import Accountsummary from './Accountsummary'
import Todayusage from './Today_usage'
import SimCards from './Sim_Cards'
import { IoChatboxEllipsesSharp} from 'react-icons/io5'



const Dashbaord = () => {



 


  return (
    <div className='text-[14px] relative '>

      <Dashheader />

      <div id="main" className=""><Outlet /></div>




      {/* <IoChatboxEllipsesSharp size={50} color="blue" className='fixed bottom-4 right-10 cursor-pointer ' /> */}








    </div>
  )
}

export default Dashbaord