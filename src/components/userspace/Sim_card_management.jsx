import React from "react";
import Basic_setting from "./Sim_management_coms/Basic_setting";
import Reset_pin from "./Sim_management_coms/Reset_pin";

const Simcardmanagement = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col gap-8 mt-8">
      {/* <h1 className="text-[24px] text-gray-600 mt-8">Sim card management</h1> */}

      <div className="flex gap-2">
        <nav className="w-[20%] h-[500px] border-r ">
          <ul class="p-4 ">
            <li class="mb-4 bg-gray-50 p-1 rounded-sm  cursor-pointer hover:bg-gray-300">
              Basic Setting
            </li>
            <li class="mb-4 bg-gray-50 p-1 rounded-sm  cursor-pointer hover:bg-gray-300">
              Security Options
            </li>
            <li class="mb-4 bg-gray-50 p-1 rounded-sm  cursor-pointer hover:bg-gray-300">
              Reset Pin
            </li>
          </ul>
        </nav>


        <div className="w-full flex flex-col gap-4">
          <Basic_setting />
          <Reset_pin />
        </div>


        {/* <section className="w-[60%] flex flex-col gap-4">
          <div className="flex items-center justify-between  gap-2">
            <p>SIM card status</p>
            <input type="checkbox" />
          </div>
          <div className="flex items-center justify-between gap-2">
            <p>Mobile network</p>
            <select name="" id="" className=" bg-transparent">
              <option value="">3G</option>
              <option value="">4G</option>
              <option value="">5G</option>
            </select>
          </div>
          <div className="flex items-center justify-between gap-2">
            <p>Data usage limits</p>
            <a href="/" className="text-blue-500 ">
              Edit
            </a>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default Simcardmanagement;
