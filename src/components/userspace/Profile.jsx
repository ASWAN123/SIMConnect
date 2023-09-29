import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useContextData } from "../../ContextData";

export const Profile = () => {
    const  [ userData ] = useOutletContext()
    const  {data  ,  db } = useContextData()

    const [info , setInfo] = useState({})

    useEffect(() => {
        let dataClone  = {
            first_name:userData.first_name,
            last_name:userData.last_name,
            address:userData.address,
            Zipcode:userData.Zipcode
        }
        setInfo(dataClone)
    } ,  [])


    const saveChanges = () => {
        let dataClone = data.map(item => {
            if  (item.id  === userData.id ){
                return { ...item ,  first_name:info.first_name , last_name:info.first_name ,  address:info.address , Zipcode:info.Zipcode }
            }
            return item
        })


        db.collection('simconnect').update({...dataClone})
    }

  return (
    <div className="mt-8 flex flex-col gap-8  ">
      {/* <h1 className="text-[24px] text-black ">Profile</h1> */}

      <div className="w-full flex gap-2 ">
        <div className="w-[300px]  flex flex-col gap-2 items-center p-2 bg-gradient-to-br from-bg-white to-bg-gray-50">
            <img src="/userprofile.png" className="w-[150px]" alt="" />

          <p className="text-[16px] font-semibold ">{userData.last_name} {userData.first_name}</p>
          <p className="text-[16px] font-semibold flex flex-col gap-2 items-center">registered  since <span> August 19, 1975</span></p>
        </div>
        <div className="w-full  flex flex-col gap-4 pl-4">
                <h2 className="text-[30px] ">Profile information</h2>
            <form action="" className=" flex flex-col gap-2  ">
                <div className="flex flex-col gap-2 ">
                    <label className="font-semibold " htmlFor="FirstNmae">First name</label>
                    <input onChange={(e) => {setInfo({...info ,  first_name:e.target.value})}} className=" px-2 text-gray-500 bg-transparent border  border-dashed  w-full h-10 text-[16px] outline-none " value={info.first_name} type="text" name="FirstNmae" id="FirstName" />
                </div>

                <div className="flex flex-col gap-2 ">
                    <label className="font-semibold " htmlFor="LastName">Last name</label>
                    <input onChange={(e) => {setInfo({...info ,  last_name:e.target.value})}} className=" px-2 text-gray-500 bg-transparent border  border-dashed  w-full h-10 text-[16px] outline-none " value={info.last_name} type="text" name="LastName" id="LastName" />
                </div>

                <div className="flex flex-col gap-2 ">
                    <label className="font-semibold " htmlFor="Address">Address</label>
                    <input onChange={(e) => {setInfo({...info ,  address:e.target.value})}} className=" px-2 text-gray-500 bg-transparent border  border-dashed  w-full h-10 text-[16px] outline-none " value={info.address} type="text" name="Address" id="Address" />
                </div>

                <div className="flex flex-col gap-2 ">
                    <label className="font-semibold " htmlFor="Zipcode">Zipcode</label>
                    <input onChange={(e) => {setInfo({...info ,  Zipcode:e.target.value})}} className=" px-2 text-gray-500 bg-transparent border  border-dashed  w-full h-10 text-[16px] outline-none " value={info.Zipcode} type="text" name="Zipcode" id="Zipcode" />
                </div>

                <div className="flex flex-col gap-2 ">
                    <label className="font-semibold " htmlFor="Country">Country</label>
                    <input disabled className=" pointer-events-none opacity-[0.7]  px-2 text-gray-400 bg-transparent border  border-dashed  w-full h-10 text-[16px] outline-none " value={userData.country || 'United State'} type="text" name="Country" id="Country" />
                </div>


                <input type="submit" value="Save"  className="w-fit mx-auto px-6 py-2 bg-blue-400 text-[16px] text-white"/>

            </form>
        </div>
      </div>
    </div>
  );
};