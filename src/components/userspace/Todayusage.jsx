import React, { useEffect, useState } from "react";

const Todayusage = () => {
  const [highlighted, setHighlighted] = useState(false);
  const [data, setData] = useState([
    {
      appImage: "./chrome.png",
      appName: "Chrome",
      dataUsage: 745,
      status: "Running",
      priority: "High",
      networkAccess: "On",
    },
    {
      appImage: "./instagram.png",
      appName: "instagram",
      dataUsage: 2000,
      status: "Sleeping",
      priority: "Medium",
      networkAccess: "Off",
    },
    {
      appImage: "./twitter.png",
      appName: "Twitter",
      dataUsage: 1012,
      status: "Running",
      priority: "Medium",
      networkAccess: "On",
    },
    {
      appImage: "./poinaccess.png",
      appName: "hotspot",
      dataUsage: 4030,
      status: "Running",
      priority: "High",
      networkAccess: "On",
    },
    {
      appImage: "./tiktok.png",
      appName: "Tiktok",
      dataUsage: 500,
      status: "Sleeping",
      priority: "Medium",
      networkAccess: "Off",
    },
    {
      appImage: "./linkdin.png",
      appName: "linkdin",
      dataUsage: 260,
      status: "Running",
      priority: "Medium",
      networkAccess: "On",
    },
    {
      appImage: "./whatsap.png",
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
      console.log("changed hightlight", highlighted);
    };

    const interval0 = setInterval(updateData, 2000);

    return () => {
      clearInterval(interval0);
      clearInterval(interval1);
    };
  }, [data]);

  return (
    <div className="mt-8 flex flex-col gap-8 mb-[100px]">
      <h1 className="text-[24px] text-black">Today's Usage</h1>

      <table className=" mx-auto w-[80%]  ">
        <thead>
          <tr className=" bg-transparent text-black ">
            <th className="  py-2 text-left "></th>
            <th className="  py-2 text-left ">Data usage</th>
            <th className="  py-2 text-left ">Status</th>
            <th className="  py-2 text-left ">Priority</th>
            <th className="  py-2 text-center ">Network access</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x, index) => {
            return (
              <tr key={index} className="  border-b  rounded-md ">
                <td className=" text-left py-4  flex items-center  gap-4 ">
                  <img className="w-[30px] " src={x.appImage} alt="" />{" "}
                  <p>{x.appName}</p>
                </td>
                <td className=" text-left py-4 ">
                  <p className={ ( x.status === 'Running'&& highlighted ) ? "bg-blue-300 w-fit px-2 rounded-lg " : "w-fit px-2 rounded-lg " }>
                    {x.dataUsage.toString().length >= 4
                      ? (Math.floor(x.dataUsage / 10) / 100).toFixed(2) + " GB"
                      : x.dataUsage + " MO"}
                  </p>
                </td>
                <td
                  className={
                    x.status === "Running"
                      ? " text-left py-4  text-green-700 "
                      : " text-left py-4  text-red-700 "
                  }
                >


                  <p className={
                    x.status === "Running"
                      ? " w-fit px-2 rounded-lg bg-green-300 "
                      : " w-fit px-2 rounded-lg bg-red-300 "
                  }>{x.status}</p>
                </td>
                <td className=" text-left py-4  ">{x.priority}</td>
                <td className=" py-4  text-center">{x.networkAccess}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Todayusage;
