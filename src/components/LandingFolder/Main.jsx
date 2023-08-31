import React from 'react'

function Main() {
  return (
    <section className="h-[500px] flex items-center gap-4 mt-8 ">
    <div className="flex-1 flex flex-col gap-4 ">
      <h1 className="text-[2rem] font-semibold">Welcome to <span className="text-blue-700">SIM-Connect</span> - Your Ultimate SIM Card Provider!</h1>
      <p className="pl-4 ">Discover seamless connectivity with SIMConnect's cutting-edge SIM card solutions. Whether you're a globe-trotting traveler, a digital nomad, or simply looking for reliable mobile service, we've got you covered. Our high-performance SIM cards offer lightning-fast data speeds, and hassle-free activation.</p>
      <p className="pl-4 ">Join the SIMConnect revolution today and unlock a world of unparalleled connectivity. Whether it's for business, travel, or everyday use, trust us to keep you connected effortlessly.</p>
      <button className="ml-4 w-[250px] border px-6 py-2 text-lg text-white rounded-md bg-emerald-600 ">Try For free</button>
    </div>
    <div className="flex-1">
      <img src="./image1.png" className="w-[500px]  mx-auto" alt="" />
    </div>
  </section>
  )
}

export default Main