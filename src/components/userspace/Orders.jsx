import React, { useEffect, useState } from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { GiConfirmed } from "react-icons/gi";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import Orderdetails from "./Orderdetails";


const Orders = () => {
  const [ userData ] = useOutletContext()
  let data = userData.subscriptions
  let navigate  = useNavigate()
  
  






  

  const [orders, setOrder] = useState(data.slice(0, 3));

  const [showDetails, setShowDetails] = useState({ show: false, id: "" });




  const  handleshowDetails = (x) => {
    setShowDetails({ show: true , id: x })
  }

  const createNewOrder = () => {

    navigate('/SIMConnect/account/neworder', { state: userData });
  }

  return (
    <div className="mt-8 w-full mb-[100px]  h-[500px]  relative ">
      <div className="flex items-center justify-between ">
        <h1 className="text-[24px] text-gray-600 ">Orders History</h1>
        { userData.subscriptions.length < 3 && <button onClick ={createNewOrder} className="px-6 py-2  bg-green-500 text-white rounded-sm ">
          New order
        </button> }
      </div>
      <div className="w-[90%]  flex flex-col gap-4 mx-auto mt-4 ">
        

        <div className="w-full pl-6 flex flex-col items-center justify-between gap-4 ">
          {/* order details   */}



          <table className="w-full border-separate border-spacing-y-2 table-fixed  ">
            <thead className="">
              <tr className="text-gray-500">
                <td className=" py-3 px-1">Buyer Name</td>
                <td className=" py-3 px-1">ID</td>
                <td className=" py-3 px-1">Date</td>
                <td className=" py-3 px-1">City , state</td>
                <td className=" py-3 px-1">Address</td>
                <td className=" py-3 px-1">Status</td>
                <td className=" py-3 px-1 text-center">Details</td>
              </tr>
            </thead>
            <tbody className=" relative mb-3 ">
              {orders.map((order) => {
                return (
                  <tr className="" key={order.id}>
                    <td className="bg-white last:rounded-r-lg first:rounded-l-lg  py-3 px-1 flex gap-2 items-center">
                      <img
                        className="w-[30px]"
                         src="./images/profileimage.png"
                        alt=""
                      />
                      <p>{userData.first_name+ ' ' +userData.last_name}</p>
                    </td>
                    <td className="bg-white last:rounded-r-lg first:rounded-l-lg py-3 px-1">
                      {order.id}
                    </td>
                    <td className="bg-white last:rounded-r-md first:rounded-l-lg py-3 px-1">
                      {new Date(order.date.seconds * 1000 + Math.round(order.date.nanoseconds / 1000000)).toDateString()   }
                    </td>
                    <td className="bg-white last:rounded-r-md first:rounded-l-lg py-3 px-1">
                      {order.location.label}
                    </td>
                    <td className="bg-white last:rounded-r-md first:rounded-l-lg py-3 px-1">
                      {userData.address}
                    </td>
                    <td className="bg-white last:rounded-r-md first:rounded-l-lg py-3 px-1">
                      <p
                        className={
                          order.deliverystatus === "Delivered"
                            ? "w-fit rounded-md  "
                            : "w-fit rounded-md  "
                        }
                      >
                        {order.deliverystatus}
                      </p>
                    </td>
                    <td className="bg-white last:rounded-r-md first:rounded-l-lg  py-3 px-1 ">
                      <div onClick={()=> { handleshowDetails( order.id )}} className="cursor-pointer  w-fit mx-auto">
                        <BsFillArrowDownCircleFill
                          size={20}
                          color="black"
                          className="mx-auto -rotate-90"
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* you can add bg of  gray  with  some opacity */}
      { showDetails.show && <div className=" absolute top-0  "><Orderdetails setShowDetails ={setShowDetails} showDetails ={showDetails}/></div> }
    </div>
  );
};

export default Orders;
