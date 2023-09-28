import React, { useEffect, useState } from 'react'
import SimCards from './Sim_Cards'
import Accountsummary from './Accountsummary'
import Todayusage from './Today_usage'
import { useOutletContext } from 'react-router-dom'
import { useContextData } from '../../ContextData'



const Maindash = () => {
    const [ userData ] = useOutletContext()




    return (
        <>

             <div className='mt-8'>
                <p className='text-[20px] capitalize '>Hey there , <span className=''>{userData.first_name}!</span></p>
            </div>

            <SimCards  userData = {userData} />

            <Accountsummary  userData = {userData} />
            
            <Todayusage /> 

        </>
    )
}

export default Maindash