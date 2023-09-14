import React from "react";
import { TfiSignal } from "react-icons/tfi";

function Logo({color}) {

  return (
    <div className="flex gap-1 p-1  items-end ">
      <TfiSignal size={26} color="#f97316" />
      <p className={`  text-orange-500 text-[18px] border-b-2 border-orange-500 `}>Networka</p>
    </div>
  );
}

export default Logo;
