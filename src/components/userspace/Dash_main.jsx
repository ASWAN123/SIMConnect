import React from 'react'
import SimCards from './Sim_Cards'
import Accountsummary from './Accountsummary'
import Todayusage from './Today_usage'

const Maindash = () => {

    return (
        <>
            <SimCards />

            <Accountsummary />
            
            <Todayusage />
        </>
    )
}

export default Maindash