import React from "react";
import { TfiSignal } from "react-icons/tfi";

function Logo({ colorx }) {
  return (
    <div className="flex gap-1  items-end ">
      <TfiSignal size={26} color={ colorx ? "white" : 'black'} />
      <p
        className={ colorx ? "text-white  font-medium text-[18px] border-b-2 border-white " :   "text-black  font-medium text-[18px] border-b-2 border-black "}
      >
        <span className="">N</span>etworka
      </p>
    </div>
  );
}

export default Logo;
