import React from "react";
import { TfiSignal } from "react-icons/tfi";

function Logo({ color }) {
  return (
    <div className="flex gap-1 p-1  items-end ">
      <TfiSignal size={26} color='green' />
      <p
        className={`  text-${color}  font-medium text-[18px] border-b-2 border-${color}`}
      >
        <span className="text-blue-400">N</span>etworka
      </p>
    </div>
  );
}

export default Logo;
