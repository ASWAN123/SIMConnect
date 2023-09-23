import React, { useEffect, useState } from "react";

const Reset_pin = () => {

  const [option, setOption] = useState("Disable");


  return (
    <section className="flex flex-col gap-2 p-2 w-full ">
          <h3 className='w-full border-b-2 mt-2 mb-3 py-2 text-[20px] font-semibold'>Security</h3>

      <div className="flex items-center p-4  gap-2 w-full  rounded-md shadow-md bg-white ">
        <p>Lock SIM card : </p>
        <select value={option} onChange={(e) =>{setOption(e.target.value)} } className= { option === "Disable" ? "text-blue-500 outline-none" : "text-red-500 outline-none" } >
          <option value="Enable"  className="">
            Enable
          </option>
          <option value="Disable"  className="">
            Disable
          </option>
        </select>
      </div>
      <div className="flex gap-4 flex-col  rounded-md shadow-md bg-white p-2 ">
        <p className="text-[16px]">Change SIM PIN</p>
        <div className="flex flex-col w-[400px] gap-4 ">
          <div className="flex items-center gap-4 w-full justify-between   ">
            <p>Old PIN : </p>
            <input
              className="w-[250px] h-8 border rounded-md outline-none  px-2 "
              type="number"

            />
          </div>
          <div className="flex items-center gap-4 w-full justify-between   ">
            <p>New PIN : </p>
            <input
              className="w-[250px] h-8 border rounded-md outline-none  px-2 "
              type="number"
            />
          </div>
        </div>
        <button className="px-6 py-1 bg-blue-400 ml-auto rounded-md">Save</button>
      </div>
    </section>
  );
};

export default Reset_pin;
