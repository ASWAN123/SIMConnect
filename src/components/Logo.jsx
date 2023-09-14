import React from "react";
import { TfiSignal } from "react-icons/tfi";

function Logo({ color }) {
  return (
    <div className="flex gap-1 p-1 items-center  ">
      <TfiSignal size={26} color="blue" />
      <p className="  text-blue-600 text-[14px] py-1 mb-4">Networka</p>
    </div>
  );
}

export default Logo;
