import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { AiOutlineControl, AiOutlineSetting } from "react-icons/ai";
import { MdOutlineConnectedTv } from "react-icons/md";

const Basic_setting = () => {
  const [userData] = useOutletContext();

  const networkData = [
    {
      statusValue: "Connected",
      macValue: "A4-35-3A-B1-68-05",
      ipValue: "192.169.0.1",
      sim: "SIM Card 1",
    },
  ];

  const deviceData = [
    {
      name: "Iphone x",
      imageSrc:
        "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
      macAddress: "A4:35:3A:B1:68:05",
    },
    {
      name: "iPad",
      imageSrc:
        "M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z",
      macAddress: "1B:2C:3D:4E:5F:6A",
    },
    {
      name: "Smart TV",
      imageSrc:
        "M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z",
      macAddress: "2A:3B:4C:5D:6E:7F",
    },
    {
      name: "Laptop",
      imageSrc:
        "M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z",
      macAddress: "3A:4B:5C:6D:7E:8F",
    },
    {
      name: "Desktop",
      imageSrc:
        "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25",
      macAddress: "4B:5C:6D:7E:8F:9A",
    },
  ];

  const [settingsData, setSettingsData] = useState([
    {
      name: "Bandwidth Control",
      options: [
        { label: "Enable", active: true },
        { label: "Disable", active: false },
      ],
    },
    {
      name: "MAC Filtering",
      options: [
        { label: "Enable", active: true },
        { label: "Disable", active: false },
      ],
    },
    {
      name: "Guest Network",
      options: [
        { label: "Enable", active: false },
        { label: "Disable", active: true },
      ],
    },
    {
      name: "Firewall",
      options: [
        { label: "Enable", active: true },
        { label: "Disable", active: false },
      ],
    },
    {
      name: "Parental Control",
      options: [
        { label: "Enable", active: false },
        { label: "Disable", active: true },
      ],
    },
  ]);

  const handlechanges = (position) => {
    let clonedata = settingsData.map((x, index) => {
      if (index === position) {
        let y = x.options.map((w) => {
          return { ...w, active: !w.active };
        });
        let q = { ...x, options: y };
        return q;
      }
      return x;
    });

    setSettingsData(clonedata);
  };

  return (
    <section className=" w-full  rounded-sm flex flex-col gap-4 p-2 bg-white ">
      <h3 className="w-full border-b-2 mt-2 mb-3 py-2 text-[20px] font-semibold flex gap-2 items-center">
        <AiOutlineSetting size={30} color="blue" /> Basic Setting
      </h3>
      <div>
        <div className="flex gap-4 items-center justify-between bg-[#f9f9f9] rounded-md  p-4  ">
          {networkData.map((w, index) => {
            return (
              <>
                <p>
                  Netword Status :{" "}
                  <span className="text-green-500">{w.statusValue}</span>
                </p>
                <p>
                  MAC Address : <span className="">{w.macValue}</span>
                </p>
                <p>
                  IP Address :{" "}
                  <span className="text-blue-500">{w.ipValue}</span>
                </p>
                <select
                  name=""
                  id=""
                  className=" bg-transparent outline-none border-none"
                >
                  Sim card
                  <label htmlFor="">Sim card</label>
                  {userData.subscriptions.map((x, index) => {
                    return <option value="">Sim card {index + 1}</option>;
                  })}
                </select>
              </>
            );
          })}
        </div>
      </div>
      <div className="mt-4 w-full flex gap-8  justify-between bg-white ">
        {/* connected  devices */}
        <div className="w-1/2 ">
          <p className="text-[16px] mb-4 font-semibold flex  items-center gap-2 border-b-2 py-2">
            {" "}
            <MdOutlineConnectedTv size={30} color="blue" />
            Connect Devices
          </p>
          <ul className="flex flex-col gap-2  justify-between  p-2 bg-[#f9f9f9] rounded-md  ">
            {deviceData.map((y, index) => {
              return (
                <li
                  key={index}
                  className="flex gap-2 items-center justify-between"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={y.imageSrc}
                    />
                  </svg>
                  <p className="text-gray-500 mr-auto">{y.name}</p>
                  <p className="mac address">{y.macAddress}</p>
                </li>
              );
            })}
          </ul>
        </div>
        {/* setting */}
        <div className="  w-1/2  ">
          <p className="text-[16px] mb-4 font-semibold flex items-center gap-2 border-b-2 py-2">
            {" "}
            <AiOutlineControl size={30} color="blue" />
            Quick Settings
          </p>

          <div className="flex flex-col gap-2  p-2 bg-[#f9f9f9] rounded-md ">
            {settingsData.map((x, index) => {
              return (
                <div className="flex gap-2 items-center justify-between">
                  <p>{x.name}</p>
                  <div className="flex gap-2 items-center">
                    <label htmlFor={x.name} className="flex items-center gap-1">
                      <input
                        type="radio"
                        onChange={() => {
                          handlechanges(index);
                        }}
                        checked={x.options[0].active}
                        name={x.name}
                        className=" cursor-pointer"
                      />
                      {x.options[0].label}
                    </label>
                    <label htmlFor={x.name} className="flex items-center gap-1">
                      <input
                        type="radio"
                        onChange={() => {
                          handlechanges(index);
                        }}
                        checked={x.options[1].active}
                        name={x.name}
                        className=" cursor-pointer"
                      />
                      {x.options[1].label}
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Basic_setting;
