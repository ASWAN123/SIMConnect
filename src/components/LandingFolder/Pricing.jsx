import React from 'react'

function Pricing() {
  return (
    <section className="flex flex-col gap-8 mt-8 py-8">
    <h2 className="text-[1.5rem] font-semibold mb-8">Plans & Pricing</h2>
    <div id="pricing" className="flex gap-4  justify-center items-center " >
      {/* basic */}
      <div className="bg-white pb-2 flex flex-col gap-2 items-center justify-between rounded-xl min-w-[250px] max-w-[250px] ">
        <div className="flex flex-col gap-4 relative">
          <img src="./plans/basic.png" className='' alt="" />
          <p className=" absolute w-full text-center top-2 text-white font-semibold text-[20px]">Basic</p>
          <p className="text-center text-green-700 font-semibold text-[18px]">Free</p>
        </div>
        <div className="flex flex-col items-center gap-2 p-4">
          <p className="w-full text-[14px] text-center border-b border-b-green-600 ">Data: 2GB</p>

          <p className="w-full text-[14px] text-center border-b border-b-green-600 ">Minutes: 100</p>

          <p className="w-full text-[14px] text-center border-b border-b-green-600 ">SMS: 50</p>

          <p className="w-full text-[14px] text-center border-b border-b-green-600 ">Coverage: Nationwide</p>

          <p className="text-[12px]">Roaming: Stay connected even when traveling abroad with affordable international roaming options.</p>

          <p className="text-[12px]">Data Add-ons: Need more data? Easily add extra data to your plan whenever you need it.</p>
        </div>

      </div>
      {/* Standard */}
      <div className="bg-white pb-2 flex flex-col gap-2 items-center justify-between rounded-xl min-w-[250px] max-w-[250px]">
        <div className="flex flex-col gap-4 relative">
          <img src="./plans/standard.png" alt="" />
          <p className=" absolute w-full text-center top-2 text-white font-semibold text-[20px]">Standard</p>
          <p className="text-center text-blue-700 font-semibold text-[18px]">25 $ /month</p>
        </div>
        <div className="flex flex-col items-center gap-2 p-4">
          <p className="w-full text-[14px] text-center border-b border-b-blue-700 ">Data: 5GB</p>

          <p className="w-full text-[14px] text-center border-b border-b-blue-700 ">Minutes: Unlimited</p>

          <p className="w-full text-[14px] text-center border-b border-b-blue-700 ">SMS: Unlimited</p>

          <p className="w-full text-[14px] text-center border-b border-b-blue-700 ">Coverage: Nationwide</p>

          <p className="text-[12px]">Roaming: Enjoy worry-free international travel with inclusive global roaming in over 100 countries.</p>

          <p className="text-[12px]">Data Rollover: Unused data rolls over to the next month, ensuring you never waste what you've paid for.</p>
        </div>

      </div>

      {/* premium */}
      <div className="bg-white pb-2 flex flex-col gap-2 items-center justify-between rounded-xl min-w-[250px] max-w-[250px]">
        <div className="flex flex-col gap-4 relative">
          <img src="./plans/premium.png" alt="" />
          <p className=" absolute w-full text-center top-2 text-white font-semibold text-[20px]">Standard</p>
          <p className="text-center text-red-700 font-semibold text-[18px]">50 $ /month</p>
        </div>
        <div className="flex flex-col items-center gap-2 p-4">
          <p className="w-full text-[14px] text-center border-b border-b-red-700 ">Data: 15GB</p>

          <p className="w-full text-[14px] text-center border-b border-b-red-700 ">Minutes: Unlimited</p>

          <p className="w-full text-[14px] text-center border-b border-b-red-700 ">SMS: Unlimited</p>

          <p className="w-full text-[14px] text-center border-b border-b-red-700 ">Coverage: Nationwide</p>

          <p className="text-[12px]">International Calls: Make calls to international numbers at discounted rates.</p>

          <p className="text-[12px]">Priority Support: Get dedicated customer support with faster response times.</p>
        </div>

      </div>

      {/* VIP */}
      <div className="bg-white pb-2 flex flex-col gap-2 items-center justify-between rounded-xl min-w-[250px] max-w-[250px]">
        <div className="flex flex-col gap-4 relative">
          <img src="./plans/vip.png" alt="" />
          <p className=" absolute w-full text-center top-2 text-gray-500 font-semibold text-[20px]">Premium</p>
          <p className="text-center text-yellow-500 font-semibold text-[18px]">100 $ /month</p>
        </div>
        <div className="flex flex-col items-center gap-2 p-4">
          <p className="w-full text-[14px] text-center border-b border-b-yellow-500 ">Data: Unlimited</p>

          <p className="w-full text-[14px] text-center border-b border-b-yellow-500 ">Minutes: Unlimited</p>

          <p className="w-full text-[14px] text-center border-b border-b-yellow-500 ">SMS: Unlimited</p>

          <p className="w-full text-[14px] text-center border-b border-b-yellow-500 ">Coverage: Worldwide</p>

          <p className="text-[12px]">Personal Hotspot: Share your unlimited data with other devices through a personal hotspot.</p>

          <p className="text-[12px]">Global Concierge: Access exclusive perks such as airport lounge access and premium customer care.</p>
        </div>

      </div>

    </div>

  </section>
  )
}

export default Pricing