import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from "react-router-dom";

import Dashheader from './Dashheader'

import Accountsummary from './Accountsummary'
import Todayusage from './Todayusage'
import SimCards from './SimCards'



const Dashbaord = () => {






  return (
    <div className='text-[14px] '>

      <Dashheader />

      <div id="main" className=""><Outlet /></div>








    </div>
  )
}

export default Dashbaord