import React from 'react'

function Features() {
  return (
    <section className="flex flex-col gap-4 mt-8">
    <h2 className="text-[1.5rem] font-semibold mb-8">Explore Our Features</h2>

    <ul className="pl-4 py-4 flex  justify-center gap-4 flex-wrap">
      <li className="bg-blue-200 min-w-[200px] max-w-[200px] flex flex-col gap-8 items-center rounded-lg py-4">
        <h3 className=" font-medium">Global Coverage</h3>
        <p className="text-center text-[14px]">Stay connected across continents with our wide-ranging network coverage, ensuring you're never out of reach.</p>
      </li>
      <li className="bg-blue-200 min-w-[200px] max-w-[200px] flex flex-col gap-8 items-center rounded-lg py-4">
        <h3 className=" font-medium">High-Speed Data</h3>
        <p className="text-center text-[14px]">Experience the power of rapid data connectivity for smooth browsing, streaming, and online activities.</p>
      </li>
      <li className="bg-blue-200 min-w-[200px] max-w-[200px] flex flex-col gap-8 items-center rounded-lg py-4">
        <h3 className=" font-medium">Easy Activation</h3>
        <p className="text-center text-[14px]">Say goodbye to complicated setup processes. Activate your SIM card in just a few clicks and start using it instantly.</p>
      </li>
      <li className="bg-blue-200 min-w-[200px] max-w-[200px] flex flex-col gap-8 items-center rounded-lg py-4">
        <h3 className=" font-medium">Flexible Plans</h3>
        <p className="text-center text-[14px]">Choose from a variety of plans tailored to your usage. Whether you need data, minutes, or a combination of both, we have a plan that suits you.</p>
      </li>
      <li className="bg-blue-200 min-w-[200px] max-w-[200px] flex flex-col gap-8 items-center rounded-lg py-4">
        <h3 className=" font-medium">24/7 Customer Support</h3>
        <p className="text-center text-[14px]">Have a question or need assistance? Our dedicated support team is available around the clock to provide you with the help you need.</p>
      </li>
    </ul>

  </section>
  )
}

export default Features