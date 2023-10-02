import React, { useEffect, useState } from "react";

const Todayusage = () => {
  const [highlighted, setHighlighted] = useState(false);
  const [data, setData] = useState([
    {
      appImage: "/images/chrome.png",
      appName: "Chrome",
      dataUsage: 745,
      status: "Running",
      priority: "High",
      networkAccess: "On",
    },
    {
      appImage: "/images/instagram.png",
      appName: "instagram",
      dataUsage: 2000,
      status: "Sleeping",
      priority: "Medium",
      networkAccess: "Off",
    },
    {
      appImage: "/images/twitter.png",
      appName: "Twitter",
      dataUsage: 1012,
      status: "Running",
      priority: "Medium",
      networkAccess: "On",
    },
    {
      appImage: "/images/poinaccess.png",
      appName: "hotspot",
      dataUsage: 4030,
      status: "Running",
      priority: "High",
      networkAccess: "On",
    },
    {
      appImage: "/images/tiktok.png",
      appName: "Tiktok",
      dataUsage: 500,
      status: "Sleeping",
      priority: "Medium",
      networkAccess: "Off",
    },
    {
      appImage: "/images/linkdin.png",
      appName: "linkdin",
      dataUsage: 260,
      status: "Running",
      priority: "Medium",
      networkAccess: "On",
    },
    {
      appImage: "/images/whatsap.png",
      appName: "whatsap",
      dataUsage: 50,
      status: "Sleeping",
      priority: "Low",
      networkAccess: "Off",
    },
  ]);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setHighlighted(false);
    }, 500);
    const updateData = () => {
      let newData = [...data].map((x) => {
        if (x.networkAccess === "On") {
          let y = Math.floor(Math.random() * 10);

          return { ...x, dataUsage: x.dataUsage + y };
        }
        return { ...x };
      });
      setData(newData);
      setHighlighted(true);

    };

    const interval0 = setInterval(updateData, 2000);

    return () => {
      clearInterval(interval0);
      clearInterval(interval1);
    };
  }, [data]);

  return (
    <div className="mt-8 flex  flex-col gap-8 mb-[100px]">
      <h1 className="text-[24px] text-black">Today's Usage</h1>

      <table className="pl-8 mx-auto w-[80%] table-fixed ">
        <thead>
          <tr className=" bg-transparent text-black ">
            <th className="  py-2 text-center "></th>
            <th className="  py-2 text-center ">Data usage</th>
            <th className="  py-2 text-center ">Status</th>
            <th className="  py-2 text-center ">Priority</th>
            <th className="  py-2 text-center pr-4 ">Network access</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x, index) => {
            return (
              <tr key={index} className="  border-b  rounded-md ">
                <td className=" text-center py-4  flex items-center pl-8 gap-4 ">
                  <img className="w-[30px] " src={x.appImage} alt="" />{" "}
                  <p>{x.appName}</p>
                </td>
                <td className=" text-center py-4 ">
                  <p className={ ( x.status === 'Running'&& highlighted ) ? "bg-blue-300 w-fit px-2 rounded-lg mx-auto" : "mx-auto w-fit px-2 rounded-lg " }>
                    {x.dataUsage.toString().length >= 4
                      ? (Math.floor(x.dataUsage / 10) / 100).toFixed(2) + " GB"
                      : x.dataUsage + " MO"}
                  </p>
                </td>
                <td
                  className={
                    x.status === "Running"
                      ? " text-center py-4  text-green-700 "
                      : " text-center py-4  text-red-700 "
                  }
                >


                  <p className={
                    x.status === "Running"
                      ? " w-fit px-2 rounded-lg bg-green-300 mx-auto "
                      : " w-fit px-2 rounded-lg bg-red-300 mx-auto "
                  }>{x.status}</p>
                </td>
                <td className=" text-center py-4  ">{x.priority}</td>
                <td className=" py-4  text-center pr-4">{x.networkAccess}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Todayusage;
