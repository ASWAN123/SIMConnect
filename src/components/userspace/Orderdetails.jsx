import React from 'react'
import { useLocation, useOutletContext } from 'react-router-dom'
import { GiConfirmed } from "react-icons/gi";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";

const Orderdetails = ({setShowDetails ,  showDetails}) => {
  let id  = showDetails.id 
  const [ userData ] = useOutletContext() 
  let order = userData.subscriptions.find( x => x.id === id )





    return (
      
        <div className="  p-4 z-50 w-full h-[500px]  bg-gray-200 ">
        <p className=" ">
                Order details :{" "}
                <span className=" text-blue-500 ">#{order.id}</span>
              </p>
          <div  className="  cursor-pointer  flex flex-col gap-4  relative" >
            <GrClose
              size={26}
              onClick={() => {setShowDetails({...showDetails ,  show:false})}}
              className=" rounded-full  absolute right-1 -top-5 "
            />
            <img src="/images/complete.png" className="w-[50px] mx-auto rounded-lg" alt="" />
            <p className="text-center w-full text-[20px] text-green-700">
              Thank You For Your Purchase !{" "}
            </p>
          </div>
          <div className="flex items-center  justify-between px-[15%] mt-8   ">
            <div className="flex flex-col gap-2 items-center justify-center ">
              <GiConfirmed size={24} color="lightgreen" />
              <p>Ordered</p>
            </div>
            <hr className="w-full border-gray-500" />
            <div className="flex flex-col gap-2 items-center justify-center ">
              <GiConfirmed size={24} color="lightgreen" />
              <p>Processing</p>
            </div>
            <hr className="w-full  border-gray-500" />
            <div className="flex flex-col gap-2 items-center justify-center ">
              <GiConfirmed size={24} />
              <p>Delivered</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 my-6 pl-8">
              <p>To :</p>
              <address className="flex flex-col gap-1">
                <p>{userData.first_name + " " + userData.last_name}</p>
                <p>{order.location.label + ' , ' + order.location.value}</p>
                <p>{userData.address}, {userData.zipcode}</p>
              </address>
            </div>
          {/* <hr className="w-full mt-8 " /> */}
          <div className="w-full mt-4 px-4 py-2  flex gap-2 items-center justify-between ">
            <table className="w-full table-fixed">
              <thead className="">
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
                  <td className="text-center py-2">{order.name}</td>
                  <td className="text-center py-2">{order.id}</td>
                  <td className="text-center py-2">{order.payment}</td>
                  <td className="text-center py-2">{order.deliverystatus}</td>
                  <td className="text-center py-2">{ new Date(order.date.seconds * 1000 + Math.round(order.date.nanoseconds / 1000000)).toDateString()  }</td>
                  <td className="text-center py-2">{order.price}$</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
        
    )
}

export default Orderdetails