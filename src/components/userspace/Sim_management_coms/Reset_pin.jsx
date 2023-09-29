import React, { useEffect, useState } from "react";

const Reset_pin = () => {

  const [simStatus, setSimStatus] = useState(false);
  const [option , setOption] = useState('Disable') ;
  const [ Oldpin ,  setOldpin] = useState('')
  const  [ Newpin ,  setNewpin] = useState('')
  const [ pinchanged  ,  setPinchanged] = useState(false)

  const FAKEPinupdate = () => {
    if (Oldpin.trim().length !== 4 ) return 
    if (Newpin.trim().length !== 4 ) return 

    setPinchanged(true)
    setNewpin('')
    setOldpin('')
    
  }


  return (
    <section className="flex flex-col gap-2 p-2 w-full ">
          <h3 className='w-full border-b-2 mt-2 mb-3 py-2 text-[20px] font-semibold'>Security</h3>

      <div className="flex items-center p-4  gap-2 w-full  rounded-md shadow-md bg-white ">
        <p>Lock SIM card : </p>
        <select value={option} onChange={(e) =>{setOption(e.target.value) ; setSimStatus(!simStatus) } } className= { option === "Disable" ? "text-blue-500 outline-none" : "text-red-500 outline-none" } >
          <option value="Enable"  className="">
            Enable
          </option>
          <option value="Disable"  className="">
            Disable
          </option>
        </select>
      </div>
      <div className= { simStatus ? "flex gap-4 flex-col  rounded-md shadow-md bg-white p-2 " : " pointer-events-none opacity-[0.7] flex gap-4 flex-col  rounded-md shadow-md bg-white p-2" }>
        <p className="text-[16px]">Change SIM PIN</p>
        <div className="flex flex-col w-[400px] gap-4 ">
          <div className="flex items-center gap-4 w-full justify-between   ">
            <p>Old PIN : </p>
            <input
              className="w-[250px] h-8 border rounded-md outline-none  px-2 "
              type="number"
              value={Oldpin}
              onChange={(e)=> {setOldpin(e.target.value)}}

            />
          </div>
          <div className="flex items-center gap-4 w-full justify-between   ">
            <p>New PIN : </p>
            <input
              className="w-[250px] h-8 border rounded-md outline-none  px-2 "
              type="number"
              value={Newpin}
              onChange={(e)=> {setNewpin(e.target.value)}}
            />
          </div>

          { pinchanged && <p className="text-green-600">PIN code has successfully changed</p> } 
        </div>
        <button onClick={FAKEPinupdate} disabled={(Newpin.trim().length === 4 && Oldpin.trim().length ===4 ) ? false: true } className=" disabled:bg-red-200 disabled:cursor-not-allowed px-6 py-1 text-[16px] text-white rounded-sm bg-blue-400 ml-auto ">Save</button>
      </div>
    </section>
  );
};

export default Reset_pin;
