import React from 'react'
import Main from "./LandingFolder/Main"
import Features from "./LandingFolder/Features"
import Pricing from "./LandingFolder/Pricing"
import Footer from './LandingFolder/Footer'

function LandingPage() {
  return (
    <main className="border-green-500 px-4 ">

    {/* main jsx */}
    <Main />
    
    {/* features jsx */}
    <Features />

    {/* pricing */}
    <Pricing />

    {/* footer */}

    <Footer />



  </main>
  )
}

export default LandingPage