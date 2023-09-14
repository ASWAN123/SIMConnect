import React from 'react'
import SimCards from './Sim_Cards'
import Accountsummary from './Accountsummary'
import Todayusage from './Today_usage'

const Maindash = () => {

    return (
        <>
            <div className='mt-8'>
                <p className='text-[20px] '>Welcome , <span className='text-blue-500 '>Abderrahim !</span></p>
            </div>

            <SimCards />

            <Accountsummary />
            
            <Todayusage />
        </>
    )
}

export default Maindash