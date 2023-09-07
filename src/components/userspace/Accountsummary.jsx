import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { IoIosPhonePortrait } from "react-icons/io";

const Accountsummary = () => {
  return (
    <div className="mt-10 flex flex-col gap-8  ">
      <h1 className="text-[24px] text-black">Account Summary</h1>

      <div className=" mt-4 rounded-md w-[70%] mx-auto h-[150px] flex gap-4  justify-between p-4">
        <div className="flex gap-2 items-center  justify-center">
          <IoIosPhonePortrait size={60} />
          <div className="flex gap-2 flex-col text-gray-500">
            <p className=" font-semibold">Realme Narzo 60x</p>
            <p>06 53 945 963</p>
            <p>Balance : {"5.67"} $</p>
          </div>
          
        </div>

        <div
          id="static"
          className="flex gap-6 mr-8 items-center justify-center "
        >
          <div className="relative">
            {" "}
            <div className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 flex gap-1 flex-col items-center justify-center">
              <p>78</p>
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
              value={57}
            />
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 flex gap-1 flex-col items-center justify-center">
              <p>4.56</p>
              <span>GB</span>
            </div>{" "}
            <CircularProgressbar
              className="h-[130px]"
              styles={buildStyles({
                pathTransitionDuration: 1,
                textSize: "16px",
                textColor: "#000435",
                pathColor: "#05a38c",
              })}
              value={74}
            />
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 flex gap-1 flex-col items-center justify-center">
              <p>56</p>
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
              value={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountsummary;
