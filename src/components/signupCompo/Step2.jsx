import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid';

const Step2 = ({ setValue='' }) => {

    const unique_id = uuid();
    const small_id = unique_id.slice(0,10)
    const [subscription, setSubscription] = useState(0);
    
    useEffect(() => {
      if(setValue){
        setValue('subscriptions' , [ { 'id' : small_id , 'date' : new Date() , 'deliverystatus':'Processing'  ,  'name':'Basic' , 'price':5 } ])
      }
    } , [] )

    const  pickupanumber = (x ,  y , w) => {
      setSubscription(x);
      if(setValue){
      setValue('subscriptions.0.name',  y )
      setValue('subscriptions.0.price',  w )
      setValue('subscriptions.0.simStatus',  'Active' )
      }
    }

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
    <section className="mt-8 w-[80%] mx-auto flex flex-col gap-2 ">
      <div className="flex gap-5 justify-center ">
        {plans.map((x, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer min-w-[250px] min-h-[250px] bg-gray-100 border rounded-lg flex flex-col justify-between p-4 gap-4 "
            >
              <p className="text-[#000435] text-[16px] flex gap-2">
                {x.name}
                {index === subscription && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={
                      x.name === "Pro"
                        ? "w-6 h-6  text-orange-400"
                        : "w-6 h-6  text-green-500"
                    }
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                )}
              </p>
              <p className="text-[#000435]">Plan Details:</p>
              <ul className="flex flex-col gap-1 ">
                <li className="text-gray-600 pl-1 flex gap-1 items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={
                      x.name === "Pro"
                        ? "w-6 h-6  text-orange-400"
                        : "w-6 h-6  text-blue-400"
                    }
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>{" "}
                  Data: {x.data}
                </li>
                <li className="text-gray-600 pl-1 flex gap-1 items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={
                      x.name === "Pro"
                        ? "w-6 h-6  text-orange-400"
                        : "w-6 h-6  text-blue-400"
                    }
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Minutes: {x.minutes}
                </li>
                <li className="text-gray-600 pl-1 flex gap-1 items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={
                      x.name === "Pro"
                        ? "w-6 h-6  text-orange-400"
                        : "w-6 h-6  text-blue-400"
                    }
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>{" "}
                  SMS: {x.sms}
                </li>
                <li className="text-gray-600 pl-1 flex gap-1 items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={
                      x.name === "Pro"
                        ? "w-6 h-6  text-orange-400"
                        : "w-6 h-6  text-blue-400"
                    }
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Coverage: {x.coverage}
                </li>
              </ul>
              <div className="px-2 flex  gap-2  items-center ">
                <p className="text-[#000435] text-[28px] font-semibold ">
                  {" "}
                  ${x.price}
                </p>
                <p className="text-gray-600 ">/ a month</p>
              </div>
              <input
                onClick={() => {pickupanumber( index , x.name ,  x.price)}}
                type="button"
                name='subscription'
                // {...register('subscription')}
                value="Select"
                className={
                  index === subscription
                    ? x.name === "Pro"
                      ? "px-6 py-2 bg-orange-400 w-[90%] mx-auto cursor-pointer  rounded-md text-white "
                      : "px-6 py-2 bg-green-500 w-[90%] mx-auto cursor-pointer  rounded-md text-white "
                    : "px-6 py-2 w-[90%] bg-[#000435]  mx-auto cursor-pointer  rounded-md text-white "
                }
              />
            </div>
          );
        })}
      </div>

    </section>
  )
}

export default Step2
