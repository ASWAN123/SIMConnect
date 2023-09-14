import React from 'react'
import Main from "./LandingFolder/Main"
import Features from "./LandingFolder/Features"
import Choose from "./LandingFolder/Choose"
import Pricing from "./LandingFolder/Pricing"
import Footer from './LandingFolder/Footer'

function LandingPage() {
  return (
    <main className="border-green-500 px-2 ">

    {/* main jsx */}
    <Main />
    
    {/* features jsx */}
    <Features />


    {/* choose jsx */}
    {/* <Choose /> */}


    {/* pricing */}
    <Pricing />

    {/* footer */}

    {/* <Footer /> */}



  </main>
  )
}

export default LandingPage