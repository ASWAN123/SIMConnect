import React from "react";
import { TfiSignal } from "react-icons/tfi";

function Logo({ color }) {
  return (
    <div className="flex gap-1  items-end ">
      <TfiSignal size={26} color='black' />
      <p
        className={`  text-black  font-medium text-[18px] border-b-2 border-black`}
      >
        <span className="">N</span>etworka
      </p>
    </div>
  );
}

export default Logo;
