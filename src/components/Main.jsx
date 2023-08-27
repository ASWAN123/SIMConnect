import React, { useState } from "react";
import { AiOutlineGlobal, AiOutlineKey } from "react-icons/ai";
import { BsSpeedometer } from "react-icons/bs";
import { LuLocateFixed } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";

const Main = () => {
  const [price, setPrice] = useState(20);

  return (
    <main className="w-[90%] p-4 flex flex-col justify-between items-center gap-4 mx-auto mb-[200px] ">
      {/* section  for  home */}
      <section id="discover" className="min-w-full max-w-full  mt-8 flex gap-4 items-center justify-between ">
        <div className="w-[40%] flex flex-col gap-6 pt-6  ">
          <h1 className="text-[24px] font-bold ">
            Welcome to SIMConnect - Your Ultimate SIM Card Provider!
          </h1>
          <p className="ml-4 text-[14px] mb-6 ">
            Discover seamless connectivity with SIMConnect's cutting-edge SIM
            card solutions. Whether you're a globe-trotting traveler, a digital
            nomad, or simply looking for reliable mobile service, we've got you
            covered. Our high-performance SIM cards offer lightning-fast data
            speeds, and hassle-free activation.
          </p>
          <p className="ml-4 text-[14px] mb-6 ">
            Join the SIMConnect revolution today and unlock a world of
            unparalleled connectivity. Whether it's for business, travel, or
            everyday use, trust us to keep you connected effortlessly.{" "}
          </p>
          <button className=" ml-4 bg-gradient-to-br from-green-400 to-blue-600 py-2 px-6 rounded-md text-white font-semibold">
            Try Free Trail
          </button>
        </div>
        <img
          className="h-[500px] w-[500px]  mix-blend-multiply"
          src="./Picture1.png"
          alt=""
        />
      </section>

      {/* section  for  features  */}
      <section className="min-w-full max-w-full  mt-8 flex flex-col gap-4  ">
        <div className="">
          <h2 className="text-blue-900 text-[32px] font-bold ">
            Explore Our Features
          </h2>
          <ul className="  pl-4 flex flex-wrap justify-center gap-4 mt-8 p-2 ">
            <li className=" hover:cursor-pointer hover:bg-gray-300 p-2 flex flex-col gap-2 items-center min-w-[200px] max-w-[200px]   rounded-md ">
              <AiOutlineGlobal size={30} color="orange" className="" />
              <h3 className="text-center text-[20px] font-medium ">
                Global Coverage
              </h3>
              <p className=" text-center text-[14px] font-normal">
                Stay connected across continents with our wide-ranging network
                coverage, ensuring you're never out of reach.
              </p>
            </li>
            <li className=" hover:cursor-pointer hover:bg-gray-300 p-2 flex flex-col gap-2 items-center min-w-[200px] max-w-[200px]   rounded-md ">
              <BsSpeedometer size={30} color="orange" />
              <h3 className="text-center text-[20px] font-medium ">
                High-Speed Data
              </h3>
              <p className=" text-center text-[14px] font-normal">
                Experience the power of rapid data connectivity for smooth
                browsing, streaming, and online activities.
              </p>
            </li>
            <li className=" hover:cursor-pointer hover:bg-gray-300 p-2 flex flex-col gap-2 items-center min-w-[200px] max-w-[200px]   rounded-md ">
              <AiOutlineKey size={30} color="orange" />
              <h3 className="text-center text-[20px] font-medium ">
                Easy Activation
              </h3>
              <p className=" text-center text-[14px] font-normal">
                Say goodbye to complicated setup processes. Activate your SIM
                card in just a few clicks and start using it instantly.
              </p>
            </li>
            <li className=" hover:cursor-pointer hover:bg-gray-300 p-2 flex flex-col gap-2 items-center min-w-[200px] max-w-[200px]   rounded-md ">
              <LuLocateFixed size={30} color="orange" />
              <h3 className="text-center text-[20px] font-medium ">
                Flexible Plans
              </h3>
              <p className=" text-center text-[14px] font-normal">
                Choose from a variety of plans tailored to your usage. Whether
                you need data, minutes, or a combination of both, we have a plan
                that suits you.
              </p>
            </li>
            <li className=" hover:cursor-pointer hover:bg-gray-300 p-2 flex flex-col gap-2 items-center min-w-[200px] max-w-[200px]   rounded-md ">
              <BiSupport size={30} color="orange" />
              <h3 className="text-center text-[20px] font-medium ">
                24/7 Customer Support
              </h3>
              <p className=" text-center text-[14px] font-normal">
                Have a question or need assistance? Our dedicated support team
                is available around the clock to provide you with the help you
                need.
              </p>
            </li>
          </ul>
        </div>

        {/* why to choose me */}
        <div className="flex flex-col gap-4 mt-8 ">
          <h2 className="text-blue-900 text-[32px] font-bold  ">
            Why Choose SIMConnect
          </h2>
          <p className=" text-[14px] font-normal mb-6">
            At SIMConnect, we're not just a SIM card provider; we're your
            partners in staying connected. Our commitment to reliability, speed,
            and customer satisfaction sets us apart:
          </p>
          <ul className="flex flex-col gap-4">
            <li className=" hover:cursor-pointer bg-gray-300 p-2 flex flex-col gap-2 rounded-md">
              <h4 className="text-center text-[18px] font-medium ">
                Reliable Connections
              </h4>
              <p className="text-center text-[14px] font-normal">
                Count on us for consistent and dependable network connections
                wherever you go.
              </p>
            </li>
            <li className=" hover:cursor-pointer bg-gray-300 p-2 flex flex-col gap-2 rounded-md">
              <h4 className="text-center text-[18px] font-medium ">
                Transparent Pricing
              </h4>
              <p className="text-center text-[14px] font-normal">
                No hidden fees or surprises. Our pricing is straightforward ,
                ensuring you get the best value for your money.
              </p>
            </li>
            <li className=" hover:cursor-pointer bg-gray-300 p-2 flex flex-col gap-2 rounded-md">
              <h4 className="text-center text-[18px] font-medium ">
                Innovation
              </h4>
              <p className="text-center text-[14px] font-normal">
                We stay at the forefront of technology, delivering the latest
                advancements in mobile connectivity to enhance your experience.
              </p>
            </li>
            <li className=" hover:cursor-pointer bg-gray-300 p-2 flex flex-col gap-2 rounded-md">
              <h4 className="text-center text-[18px] font-medium ">
                User-Friendly Interface
              </h4>
              <p className="text-center text-[14px] font-normal">
                Our user-friendly online portal lets you manage your account,
                track usage, and top up with ease.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* section  for  pricing plans*/}

      <section id="pricing" className=" min-w-full max-w-full  flex flex-col gap-4 mt-8">
        <h2 className="text-blue-900 text-[32px] font-bold">Plans & Pricing</h2>
        <div className="w-[80%] flex gap-4  justify-center mx-auto mt-4 ">
          {/* basic */}
          <div
            id="basic"
            className="min-w-[250px] max-w-[250px] bg-gray-200 rounded-lg "
          >
            <div>
              <img src="./plans/basic.png" alt="" />
              <p className="text-[20px] font-semibold  text-emerald-600 text-center py-2">
                Free
              </p>
            </div>
            <div className="p-2 flex flex-col gap-1 items-center justify-center px-4  ">
              <p className="w-full py-1 text-center border border-b-emerald-600 text-[14px]">
                Data: 2GB
              </p>
              <p className="w-full py-1 text-center border border-b-emerald-600 text-[14px]">
                Minutes: 100
              </p>
              <p className="w-full py-1 text-center border border-b-emerald-600 text-[14px]">
                SMS: 50
              </p>
              <p className="w-full py-1 text-center border border-b-emerald-600 text-[14px]">
                Coverage: Nationwide
              </p>
              <p className="w-full py-1 text-center border border-b-emerald-600 text-[12px]">
                Roaming: Stay connected even when traveling abroad with
                affordable international roaming options.
              </p>
              <p className="w-full py-1 text-center border border-b-emerald-600 text-[12px]">
                Data Add-ons: Need more data? Easily add extra data to your plan
                whenever you need it.
              </p>
            </div>
          </div>

          {/* standard */}
          <div
            id="standard"
            className="min-w-[250px] max-w-[250px] bg-gray-200 rounded-lg  "
          >
            <div>
              <img src="./plans/standard.png" alt="" />
              <p className="text-[20px] font-semibold  text-[#013d4d] text-center py-2">
                25 $ /month
              </p>
            </div>
            <div className="p-2 flex flex-col gap-1 items-center justify-center px-4 ">
              <p className="w-full py-1 text-center border border-b-[#013d4d]  text-[14px]">
                Data: 5GB
              </p>
              <p className="w-full py-1 text-center border border-b-[#013d4d]  text-[14px]">
                Minutes: Unlimited
              </p>
              <p className="w-full py-1 text-center border border-b-[#013d4d]  text-[14px]">
                SMS: Unlimited
              </p>
              <p className="w-full py-1 text-center border border-b-[#013d4d]  text-[14px]">
                Coverage: Nationwide
              </p>
              <p className="w-full py-1 text-center border border-b-[#013d4d] text-[12px]">
                Roaming: Enjoy worry-free international travel with inclusive
                global roaming in over 100 countries.
              </p>
              <p className="w-full py-1 text-center border border-b-[#013d4d] text-[12px]">
                Data Rollover: Unused data rolls over to the next month,
                ensuring you never waste what you've paid for.
              </p>
            </div>
          </div>

          {/* premium */}
          <div
            id="premium"
            className="min-w-[250px] max-w-[250px] bg-gray-200 rounded-lg  "
          >
            <div>
              <img src="./plans/premium.png" alt="" />
              <p className="text-[20px] font-semibold  text-[#a30e50] text-center py-2 ">
                50 $ /month
              </p>
            </div>
            <div className="p-2 flex flex-col gap-1 items-center justify-center px-4  ">
              <p className="w-full py-1 text-center border border-b-[#a30e50]  text-[14px]">
                Data: 15GB
              </p>
              <p className="w-full py-1 text-center border border-b-[#a30e50]  text-[14px]">
                Minutes: Unlimited
              </p>
              <p className="w-full py-1 text-center border border-b-[#a30e50]  text-[14px]">
                SMS: Unlimited
              </p>
              <p className="w-full py-1 text-center border border-b-[#a30e50]  text-[14px]">
                Coverage: Nationwide
              </p>
              <p className="w-full py-1 text-center border border-b-[#a30e50] text-[12px]">
                International Calls: Make calls to international numbers at
                discounted rates.
              </p>
              <p className="w-full py-1 text-center border border-b-[#a30e50] text-[12px]">
                Priority Support: Get dedicated customer support with faster
                response times.
              </p>
            </div>
          </div>
          {/* vip */}
          <div
            id="vip"
            className="min-w-[250px] max-w-[250px] bg-gray-200 rounded-lg  "
          >
            <div>
              <img src="./plans/vip.png" alt="" />
              <p className="text-[20px] font-semibold  text-[#bfa900] text-center py-2 ">
                100 $ /month
              </p>
            </div>
            <div className="p-2 flex flex-col gap-1 items-center justify-center px-4  ">
              <p className="w-full py-1 text-center border border-b-[#bfa900] text-[14px]">
                Data: Unlimited
              </p>
              <p className="w-full py-1 text-center border border-b-[#bfa900] text-[14px]">
                Minutes: Unlimited
              </p>
              <p className="w-full py-1 text-center border border-b-[#bfa900] text-[14px]">
                SMS: Unlimited
              </p>
              <p className="w-full py-1 text-center border border-b-[#bfa900] text-[14px]">
                Coverage: Worldwide
              </p>
              <p className="w-full py-1 text-center border border-b-[#bfa900] text-[12px]">
                Personal Hotspot: Share your unlimited data with other devices
                through a personal hotspot.
              </p>
              <p className="w-full py-1 text-center border border-b-[#bfa900] text-[12px]">
                Global Concierge: Access exclusive perks such as airport lounge
                access and premium customer care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
