import React from "react";
import { MdOutline4GPlusMobiledata } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";
import { IoCallSharp } from "react-icons/io5";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";

const SimCards = ({userData}) => {

  let subscriptions = userData?.subscriptions || [] ;



  const plans = [
    {
      name: "Basic",
      price: "5",
      data: "2GB",
      minutes: "100",
      sms: "50",
      coverage: "Nationwide",
    },
    {
      name: "Standard",
      price: "25",
      data: "5GB",
      minutes: "Unlimited",
      sms: "Unlimited",
      coverage: "Nationwide",
    },
    {
      name: "Premium",
      price: "50",
      data: "15GB",
      minutes: "Unlimited",
      sms: "Unlimited",
      coverage: "Nationwide",
    },
    {
      name: "Pro",
      price: "100",
      data: "Unlimited",
      minutes: "Unlimited",
      sms: "Unlimited",
      coverage: "Worldwide",
    },
  ];



  return (
    <div className=" mt-12 h-[350px] w-full bg-[#000435] rounded-md flex  gap-4 py-2 px-4 flex-col relative">
      <div className="flex gap-4 items-center justify-between mt-2 ml-4 text-[14px]">
        <p className=" py-1 cursor-pointer border-b border-white text-white ">
          All SIM Cards
        </p>
        <div className="flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white hover:cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white  hover:cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-green-500 hover:cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
            />
          </svg>
        </div>
        {/* <BsFillPatchPlusFill size={40} color='white' className='   top-[-20px] rounded-full right-10 ' /> */}
      </div>

      <div className="flex gapp-4   items-center  ">
        {
          subscriptions.map((subscription ,  index) => {
            return         <div
            id="card"
            key={index}
            className="relative w-[300px] h-[200px]    top-0 left-0 ml-4 mt-2 rounded-lg text-[14px] flex flex-col "
          >
            <img className="" src="/simcard.png" alt="" />
            <div className="absolute flex flex-col w-full  pl-2 py-2 gap-2 ">
              <div className="flex flex-col gap-1 ">
                <p className="">
                  SIM Card Status:{" "}
                  <span className="text-green-500 pl-1">{subscription.simStatus}</span>
                </p>
                <p>
                  Subscription Type:{" "}
                  <span className="text-green-500 pl-1">{subscription.name} </span>
                </p>
              </div>
  
              <div className="flex flex-col gap-1 mt-4 ">
                <p>Plan Details:</p>
                <ul className="flex flex-col gap-1 ">
                  <li className="text-gray-600 pl-1 flex gap-1 items-center ">
                    <MdOutline4GPlusMobiledata size={18} /> Data: { plans.find(sub => sub.name  === subscription.name ).data }
                  </li>
                  <li className="text-gray-600 pl-1 flex gap-1 items-center ">
                    <IoCallSharp size={18} /> Minutes: { plans.find(sub => sub.name  === subscription.name ).minutes }
                  </li>
                  <li className="text-gray-600 pl-1 flex gap-1 items-center ">
                    <BiMessageRounded size={18} /> Messages: { plans.find(sub => sub.name  === subscription.name ).sms } messages
                  </li>
                </ul>
              </div>
            </div>
          </div>
          })
        }

      </div>

      { subscriptions.length <= 3 && <BsFillPlusSquareFill
        size={42}
        color="white"
        className="absolute right-4  bottom-4 cursor-pointer  "
      /> 
      }
    </div>
  );
};

export default SimCards;
