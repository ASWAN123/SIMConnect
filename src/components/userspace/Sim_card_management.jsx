import React from "react";
import Basic_setting from "./Sim_management_coms/Basic_setting";
import Reset_pin from "./Sim_management_coms/Reset_pin";

const Simcardmanagement = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col gap-8 mt-8">


      <div className="flex gap-2">

        <div className="w-full flex flex-col gap-4 p-4 rounded-md  bg-white">
          <Basic_setting />
          <Reset_pin />
        </div>

      </div>
    </div>
  );
};

export default Simcardmanagement;
