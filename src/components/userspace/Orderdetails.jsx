import React from 'react'
import { useLocation } from 'react-router-dom'
import { GiConfirmed } from "react-icons/gi";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";

const Orderdetails = ({setShowDetails ,  showDetails}) => {




    return (
      
        <div className="absolute shadow-md p-4 z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[500px] rounded-lg bg-[#f9f9f9] ">
        <p className=" ">
                Order details :{" "}
                <span className=" text-blue-500 ">#123123123</span>
              </p>
          <div  className="  cursor-pointer  flex flex-col gap-4  relative" >
            <GrClose
              size={26}
              onClick={() => {setShowDetails({...showDetails ,  show:false})}}
              className=" rounded-full  absolute right-1 -top-5 "
            />
            <img src="/complete.png" className="w-[50px] mx-auto rounded-lg" alt="" />
            <p className="text-center w-full text-[20px] text-green-700">
              Thank You For Your Purchase !{" "}
            </p>
          </div>
          <div className="flex items-center  justify-between px-[15%] mt-8   ">
            <div className="flex flex-col gap-2 items-center justify-center ">
              <GiConfirmed size={24} color="lightgreen" />
              <p>Ordered</p>
            </div>
            <hr className="w-full" />
            <div className="flex flex-col gap-2 items-center justify-center ">
              <GiConfirmed size={24} />
              <p>Processing</p>
            </div>
            <hr className="w-full" />
            <div className="flex flex-col gap-2 items-center justify-center ">
              <GiConfirmed size={24} />
              <p>Delivered</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 my-6 pl-8">
              <p>To :</p>
              <address className="flex flex-col gap-1">
                <p>Jane Doe</p>
                <p>Los Angeles, CA</p>
                <p>123 Main Street, 90210</p>
              </address>
            </div>
          {/* <hr className="w-full mt-8 " /> */}
          <div className="w-full mt-4 px-4 py-2 border-t-black flex gap-2 items-center justify-between ">
            <table className="w-full table-fixed">
              <thead className="border-b">
                <tr>
                  <td className="text-center py-2 font-semibold ">plan</td>
                  <td className="text-center py-2 font-semibold ">ID</td>
                  <td className="text-center py-2 font-semibold ">
                    Payment method
                  </td>
                  <td className="text-center py-2 font-semibold ">Status</td>
                  <td className="text-center py-2 font-semibold ">Date</td>
                  <td className="text-center py-2 font-semibold ">Price</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center py-2">#Free</td>
                  <td className="text-center py-2">123123123</td>
                  <td className="text-center py-2">Visa ending...4545</td>
                  <td className="text-center py-2">Processing</td>
                  <td className="text-center py-2">25-01-2023 20:34</td>
                  <td className="text-center py-2">35$</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* order  infos */}

        </div>
        
    )
}

export default Orderdetails