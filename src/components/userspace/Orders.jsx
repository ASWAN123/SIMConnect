import React, { useEffect, useState } from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { GiConfirmed } from "react-icons/gi";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
const Orders = () => {
  const data = [
    {
      id: "abc12345",
      name: "Jane Doe",
      date: "27-01-2023",
      location: "Los Angeles, CA",
      address: "123 Main Street, 90210",
      status: "Ordered",
    },

    {
      id: "def67890",
      name: "Alice Johnson",
      date: "30-01-2023",
      location: "Chicago, IL",
      address: "456 Elm Street, 60601",
      status: "Processing",
    },
    {
      id: "ghi12345",
      name: "Bob Williams",
      date: "02-02-2023",
      location: "Houston, TX",
      address: "789 Oak Street, 77002",
      status: "Delivered",
    },
    {
      id: "jkl67890",
      name: "Alice Johnson",
      date: "15-03-2023",
      location: "Miami, FL",
      address: "567 Pine Avenue, 33101",
      status: "Delivered",
    },
    {
      id: "mno12345",
      name: "David Miller",
      date: "10-04-2023",
      location: "San Francisco, CA",
      address: "123 Beach Road, 94101",
      status: "Delivered",
    },
    {
      id: "pqr67890",
      name: "Emily Davis",
      date: "05-05-2023",
      location: "Boston, MA",
      address: "456 Maple Lane, 02201",
      status: "Delivered",
    },
  ];

  const [orders, setOrder] = useState(data.slice(0, 3));
  const [page, setPage] = useState(1);
  const [showDetails, setShowDetails] = useState({ show: false, id: "" });

  let pagination = data.length / 3;

  const getOrders = (x) => {
    if (x === 1) {
      setOrder(data.slice(x - 1, 3));
      setPage(x);
    } else {
      setOrder(data.slice(3 * (x - 1), 3 * x));
      setPage(x);
    }
  };

  return (
    <div className="mt-8 w-full mb-[100px] ">
      <div className="flex items-center justify-between ">
        <h1 className="text-[24px] text-gray-600 ">Orders History</h1>
        <button className="px-6 py-2  bg-green-500 text-white rounded-sm ">
          New order
        </button>
      </div>
      <div className="w-[90%]  flex flex-col gap-4 mx-auto mt-4 relative">
        {/* <p className="text-[20px] ">Orders History</p> */}

        <div className="w-full pl-6 flex flex-col items-center justify-between gap-4">
          {/* order details   */}

          <div className="absolute shadow-md p-4 z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[500px] rounded-lg bg-gray-50 ">
            <div className="flex flex-col gap-4 relative">
              <GrClose
                size={26}
                className=" cursor-pointer rounded-full  absolute right-1 top-0 "
              />
              <img src="/complete.png" className="w-[50px] mx-auto " alt="" />
              <p className="text-center w-full text-[20px]">
                Thank You ! :
                <span className="text-green-600  ">Order Success</span>
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <p className=" ">
                Order details :{" "}
                <span className=" text-blue-500 ">#123123123</span>
              </p>

              <p>To :</p>
              <address className="flex flex-col gap-1">
              <p>Jane Doe</p>
              <p>Los Angeles, CA</p>
              <p>123 Main Street, 90210</p>
              
              </address>
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
            <hr className="w-full mt-8 " />
            <div className="w-full mt-4 px-4 py-2 border-t-black flex gap-2 items-center justify-between ">
              <div className="flex items-center gap-2 ">
                <p>plan :</p>
                <span>Free</span>
              </div>
              <div className="flex items-center gap-2 ">
                <p>ID :</p>
                <span>123123</span>
              </div>
              <div className="flex items-center gap-2 ">
                <p>payemnt :</p>
                <span>VIsa ending ...4545</span>
              </div>
              <div className="flex items-center gap-2 ">
                <p>status :</p>
                <span>Processing</span>
              </div>
              <div className="flex items-center gap-2 ">
                <p>Ordered at :</p>
                <span>25-01-2023 20:34</span>
              </div>
            </div>
            <div>
              
            </div>
          </div>

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
                    <td className="bg-gray-50 last:rounded-r-lg first:rounded-l-lg  py-3 px-1 flex gap-2 items-center">
                      <img
                        className="w-[30px]"
                        src="/profileimage.png"
                        alt=""
                      />
                      <p>{order.name}</p>
                    </td>
                    <td className="bg-gray-50 last:rounded-r-lg first:rounded-l-lg py-3 px-1">
                      {order.id}
                    </td>
                    <td className="bg-gray-50 last:rounded-r-md first:rounded-l-lg py-3 px-1">
                      {order.date}
                    </td>
                    <td className="bg-gray-50 last:rounded-r-md first:rounded-l-lg py-3 px-1">
                      {order.location}
                    </td>
                    <td className="bg-gray-50 last:rounded-r-md first:rounded-l-lg py-3 px-1">
                      {order.address}
                    </td>
                    <td className="bg-gray-50 last:rounded-r-md first:rounded-l-lg py-3 px-1">
                      <p
                        className={
                          order.status === "Delivered"
                            ? "w-fit rounded-md  "
                            : "w-fit rounded-md  "
                        }
                      >
                        {order.status}
                      </p>
                    </td>
                    <td className="bg-gray-50 last:rounded-r-md first:rounded-l-lg  py-3 px-1 hover:cursor-pointer ">
                      <div>
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
          <div className="w-[30%]  rounded-lg py-2 mx-auto flex gap-3 items-center justify-center ">
            {[...Array(pagination).keys()].map((p, index) => {
              console.log(p);
              return (
                <div
                  onClick={() => {
                    getOrders(p + 1);
                  }}
                  key={index}
                  className={
                    page === p + 1
                      ? "w-8 h-8 flex items-center text-white justify-center  cursor-pointer rounded-full  bg-blue-400 "
                      : "w-8 h-8 flex items-center justify-center cursor-pointer rounded-full   "
                  }
                >
                  <p>{p + 1}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
