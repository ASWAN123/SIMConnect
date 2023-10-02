import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { IoIosPhonePortrait } from "react-icons/io";
import { LiaCoinsSolid } from "react-icons/lia";
const Accountsummary = ({ userData }) => {
  let subscriptions = userData.subscriptions  ;

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
    <div className="mt-8 flex flex-col gap-8  ">
      <h1 className="text-[24px] text-black ">Account Summary</h1>
      <div className=" p-2 rounded-md bg-[#000435]">
      {subscriptions.map((sub, index) => {
        
        return (
          <div
            key={index}
            className=" mt-4 rounded-md w-[70%] mx-auto h-[150px] flex gap-4 text-white justify-between p-4"
          >
            <div className="flex gap-2 items-center  justify-center">
              <IoIosPhonePortrait size={60} />
              <div className="flex gap-2 flex-col text-gray-100">
                <p className=" font-semibold">{sub.location.label}</p>
                <p>{sub.phonenumber}</p>
                <p className="flex gap-2 items-center  ">
                  Balance : 500 <LiaCoinsSolid size={20} color="orange" />
                </p>
              </div>
            </div>

            <div
              id="static"
              className="flex gap-6 mr-8 items-center justify-center "
            >
              <div className="relative">
                {" "}
                <div className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 flex gap-1 flex-col items-center justify-center">
                  <p>{plans.find(x => x.name === sub.name).minutes}</p>
                  <span>Mins</span>
                </div>{" "}
                <CircularProgressbar
                  className="h-[130px]"
                  styles={buildStyles({
                    pathTransitionDuration: 1,
                    textSize: "16px",
                    textColor: "#000435",
                    pathColor: "#FA8072	",
                  })}
                  value={plans.find(x => x.name === sub.name).minutes === 'Unlimited' ? 100 : 25}
                />
              </div>
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 flex gap-1 flex-col items-center justify-center">
                  <p>{plans.find(x => x.name === sub.name).data}</p>
                  <span>GB</span>
                </div>
                <CircularProgressbar
                  className="h-[130px]"
                  styles={buildStyles({
                    pathTransitionDuration: 1,
                    textSize: "16px",
                    textColor: "#000435",
                    pathColor: "#05a38c",
                  })}
                  value={ plans.find(x => x.name === sub.name).data === 'Unlimited' ? 100 : 75 }
                />
              </div>
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 flex gap-1 flex-col items-center justify-center">
                  <p>{plans.find(x => x.name === sub.name).sms}</p>
                  <span>Text</span>
                </div>
                <CircularProgressbar
                  className="h-[130px]"
                  styles={buildStyles({
                    pathTransitionDuration: 1,
                    textSize: "16px",
                    textColor: "#000435",
                    pathColor: "#71c5f9",
                  })}
                  value={plans.find(x => x.name === sub.name).sms === 'Unlimited' ? 100 : 45}
                />
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Accountsummary;
