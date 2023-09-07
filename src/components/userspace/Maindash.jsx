import React from 'react'
import SimCards from './SimCards'
import Accountsummary from './Accountsummary'
import Todayusage from './Todayusage'

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