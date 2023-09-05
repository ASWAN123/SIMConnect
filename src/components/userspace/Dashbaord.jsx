import React, { useEffect, useState } from 'react'
import { MdOutline4GPlusMobiledata } from 'react-icons/md'
import { BiMessageRounded } from 'react-icons/bi'
import { IoCallSharp } from 'react-icons/io5'
import Dash_Header from './Dash_Header'
import {TbPlus} from 'react-icons/tb'


const Dashbaord = () => {
  const [data, setData] = useState([
    {
      "appImage": "./chrome.png",
      "appName": "Chrome",
      "dataUsage": 745,
      "status": "Running",
      "priority": "High",
      "networkAccess": "On"
    },
    {
      "appImage": "./instagram.png",
      "appName": "instagram",
      "dataUsage": 2000,
      "status": "Sleeping",
      "priority": "Medium",
      "networkAccess": "Off"
    },
    {
      "appImage": "./twitter.png",
      "appName": "Twitter",
      "dataUsage": 1012,
      "status": "Running",
      "priority": "Medium",
      "networkAccess": "On"
    },
    {
      "appImage": "./poinaccess.png",
      "appName": "hotspot",
      "dataUsage": 4030,
      "status": "Running",
      "priority": "High",
      "networkAccess": "On"
    },
    {
      "appImage": "./tiktok.png",
      "appName": "Tiktok",
      "dataUsage": 500,
      "status": "Sleeping",
      "priority": "Medium",
      "networkAccess": "Off"
    },
    {
      "appImage": "./linkdin.png",
      "appName": "linkdin",
      "dataUsage": 260,
      "status": "Running",
      "priority": "Medium",
      "networkAccess": "On"
    },
    {
      "appImage": "./whatsap.png",
      "appName": "whatsap",
      "dataUsage": 50,
      "status": "Sleeping",
      "priority": "Low",
      "networkAccess": "Off"
    }
  ]);

  useEffect(() => {
    const updateData = () => {
      let newData = [...data].map((x) => {
        if (x.networkAccess === 'On') {
          let y = Math.floor(Math.random() * 10)

          return { ...x, 'dataUsage': x.dataUsage + y }
        }
        return { ...x }

      })
      setData(newData)
    }

    const interval = setInterval(updateData, 2000)
    return () => clearInterval(interval);

  }, [data])





  return (
    <div className='text-[14px]'>
      <Dash_Header />

      {/* main */}
      <div className=' mt-12 h-[400px] w-full bg-[#000080] rounded-md flex  gap-4 py-2 px-4 flex-col relative'>

        <div className='flex gap-4 items-center justify-between mt-2 ml-4  text-white text-[14px]'>
          <p className=' py-1 cursor-pointer border-b border-white '>All SIM Cards</p>
          {/* <BsFillPatchPlusFill size={40} color='white' className='   top-[-20px] rounded-full right-10 ' /> */}
        </div>


        <div className='flex gapp-4   items-center  '>

          <div id='card' className='relative w-[300px] h-[200px]    top-0 left-0 ml-4 mt-2 rounded-lg text-[14px] flex flex-col '>
            <img className='' src="./pngkit_tmobile-logo-png_2226110.png" alt="" />
            <div className='absolute flex flex-col w-full  pl-2 py-2 gap-2 '>
              <div className='flex flex-col gap-1 '>
                <p>SIM Card Status: <span className='text-green-500 pl-1'>Active</span> </p>
                <p>Subscription Type: <span className='text-green-500 pl-1'>Basic </span></p>
              </div>

              <div className='flex flex-col gap-1 mt-4 '>
                <p>Plan Details:</p>
                <ul className='flex flex-col gap-1 '>
                  <li className="text-gray-600 pl-1 flex gap-1 items-center "><MdOutline4GPlusMobiledata size={18} /> Data: 10 GB</li>
                  <li className="text-gray-600 pl-1 flex gap-1 items-center "><IoCallSharp size={18} /> Minutes: 100 minutes</li>
                  <li className="text-gray-600 pl-1 flex gap-1 items-center "><BiMessageRounded size={18} /> Messages: 50 messages</li>
                </ul>

              </div>
            </div>
          </div>

          <div id='card' className='relative w-[300px] h-[200px]    top-0 left-0 ml-4 mt-2 rounded-lg text-[14px] flex flex-col '>
            <img className='' src="./pngkit_tmobile-logo-png_2226110.png" alt="" />
            <div className='absolute flex flex-col w-full  pl-2 py-2 gap-2  '>
              <div className='flex flex-col gap-1 '>
                <p>SIM Card Status: <span className='text-green-500 pl-1'>Active</span> </p>
                <p>Subscription Type: <span className='text-green-500 pl-1'>Basic </span></p>
              </div>

              <div className='flex flex-col gap-1 mt-4 '>
                <p>Plan Details:</p>
                <ul className='flex flex-col gap-1 '>
                  <li className="text-gray-600 pl-1 flex gap-1 items-center "><MdOutline4GPlusMobiledata size={18} /> Data: 10 GB</li>
                  <li className="text-gray-600 pl-1 flex gap-1 items-center "><IoCallSharp size={18} /> Minutes: 100 minutes</li>
                  <li className="text-gray-600 pl-1 flex gap-1 items-center "><BiMessageRounded size={18} /> Messages: 50 messages</li>
                </ul>

              </div>
            </div>
          </div>

          <div id='card' className=' w-[300px] h-[200px]      relative  ml-4 mt-2 rounded-lg text-[14px] flex flex-col '>
            {/* <img className='w-[300px]  blur-sm h-[200px]' src="./pngkit_tmobile-logo-png_2226110.png" alt="" /> */}
            <TbPlus size={38} color='white' className='absolute border-2 hover:shadow  cursor-pointer rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>

          </div>

        </div>




      </div>


      <div className='mt-8 flex flex-col gap-8'>
        <h1 className='text-[18px] text-black'>Today's Usage</h1>


        <table className=' mx-auto w-[80%]  '>
          <thead>
            <tr className=' bg-transparent text-black '>
              <th className='  py-2 text-left '></th>
              <th className='  py-2 text-left '>Data usage</th>
              <th className='  py-2 text-left '>Status</th>
              <th className='  py-2 text-left '>Priority</th>
              <th className='  py-2 text-center '>Network access</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((x, index) => {
                return <tr key={index} className='  border-b '>
                  <td className=' text-left py-4  flex items-center  gap-4 '><img className='w-[30px] ' src={x.appImage} alt="" /> <p>{x.appName}</p></td>
                  <td className=' text-left py-4  '>{
                    x.dataUsage.toString().length >= 4
                      ? (Math.floor(x.dataUsage / 10) / 100).toFixed(2) + ' GB'
                      : x.dataUsage + ' MO'
                  }</td>
                  <td className={x.status == 'Running' ? ' text-left py-4  text-green-500 rounded-full' : ' text-left py-4  text-red-500 rounded-full'}>{x.status}</td>
                  <td className=' text-left py-4  '>{x.priority}</td>
                  <td className=' py-4  text-center'>{x.networkAccess}</td>
                </tr>
              })
            }
          </tbody>



        </table>
      </div>



      <div className='mt-10 flex flex-col gap-8 mb-[100px]'>
        <h1 className='text-[18px] text-black'>Account Summary</h1>
        <div>
            
        </div>



      </div>



    </div>
  )
}

export default Dashbaord