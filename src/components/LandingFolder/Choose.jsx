import React from 'react'

function Choose() {
  return (
    <section className="flex flex-col gap-4 mt-8">
    <h2 className="text-[1.5rem] font-semibold mb-8">Why Choose SIM-Connect</h2>
    <p className="pl-4">At SIMConnect, we're not just a SIM card provider; we're your partners in staying connected. Our commitment to reliability, speed, and customer satisfaction sets us apart:</p>

    <div className="pl-8 pr-2 flex flex-col gap-2">
      <details className="bg-gray-300 hover:cursor-pointer py-2 px-2 rounded-md">
        <summary className="text-[18px] font-normal">Reliable Connections</summary>
        <p className="text-[14px] pl-8 text-gray-700">Count on us for consistent and dependable network connections wherever you go.</p>
      </details>


      <details className="bg-gray-300 hover:cursor-pointer py-1 px-2 rounded-md">
        <summary className="text-[18px] font-normal">Transparent Pricing</summary>
        <p className="text-[14px] pl-8 text-gray-700">No hidden fees or surprises. Our pricing is straightforward , ensuring you get the best value for your money.</p>
      </details>


      <details className="bg-gray-300 hover:cursor-pointer py-1 px-2 rounded-md">
        <summary className="text-[18px] font-normal">Innovation</summary>
        <p className="text-[14px] pl-8 text-gray-700">We stay at the forefront of technology, delivering the latest advancements in mobile connectivity to enhance your experience.</p>
      </details>


      <details className="bg-gray-300 hover:cursor-pointer py-1 px-2 rounded-md">
        <summary className="text-[18px] font-normal">User-Friendly Interface</summary>
        <p className="text-[14px] pl-8 text-gray-700">Our user-friendly online portal lets you manage your account, track usage, and top up with ease.</p>
      </details>

    </div>


  </section>
  )
}

export default Choose