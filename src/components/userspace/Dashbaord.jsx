import React, { useEffect, useState } from 'react'
import { MdOutline4GPlusMobiledata } from 'react-icons/md'
import { BiMessageRounded } from 'react-icons/bi'
import { IoCallSharp } from 'react-icons/io5'
import Dash_Header from './Dash_Header'

const Dashbaord = () => {
  const [data ,  setData] = useState([
    {
      "appImage": "./chrome.png",
      "appName": "Chrome",
      "dataUsage": 4045,
      "status": "Running",
      "priority": "High",
      "networkAccess": "On"
    },
    {
      "appImage": "./instagram.png",
      "appName": "instagram",
      "dataUsage": 2000,
      "status": "Running",
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
    }
  ]);

  useEffect(() => {
    const  updateData = () => {
      let newData = [...data].map((x) => {
        if(x.networkAccess !== 'Off'){
          let y = Math.floor(Math.random() * 10) 
          
          return {...x , 'dataUsage' :  x.dataUsage + y } 
        }
        return {...x}

      })

      console.log(newData)

      setData(newData)

    }

    const  interval  = setInterval(updateData  ,  2000)

  } ,  [] )
  




  return (
    <div className='text-[14px] h-[2000px]'>
      <Dash_Header />

      {/* main */}
      <div className=' mt-10 h-[300px] w-full  bg-blue-400 rounded-md flex  gap-4 py-2 px-4 flex-col '>

        <div className='flex gap-4 items-center mt-2 ml-4  text-white text-[14px]'>
          <p className=' py-1 cursor-pointer border-b border-white '>All SIM Cards</p>
        </div>


        <div className='flex gapp-4  items-center '>

          <div id='card' className='relative  top-0 left-0 ml-4 mt-2 rounded-lg text-[14px] flex flex-col '>
            <img className='w-[300px] h-[200px]' src="./pngkit_tmobile-logo-png_2226110.png" alt="" />
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

          <div id='card' className='relative  top-0 left-0 ml-4 mt-2 rounded-lg text-[14px] flex flex-col '>
            <img className='w-[300px] h-[200px]' src="./pngkit_tmobile-logo-png_2226110.png" alt="" />
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

          <div id='card' className='relative  top-0 left-0 ml-4 mt-2 rounded-lg text-[14px] flex flex-col '>
            <img className='w-[300px] h-[200px]' src="./pngkit_tmobile-logo-png_2226110.png" alt="" />
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

        </div>




      </div>


      <div className='mt-8 flex flex-col gap-8'>
        <h1 className='text-[18px] '>Today Usage History</h1>
        {/* <div className='mx-auto w-[600px]  flex flex-col gap-2'>
          <div className='flex items-center gap-2 '>
            <p className='w-[100px]'>Data</p>
            <p className='text-blue-400'>70%</p>
            <div className='h-4 border border-blue-300 w-full rounded-md'>
              <div className='h-full bg-blue-400 w-[70%]  rounded-md'></div>
            </div>
          </div>

          <div className='flex items-center gap-2 '>
            <p className='w-[100px]'>Messages</p>
            <p className='text-yellow-400'>30%</p>
            <div className='h-4 border border-yellow-300 w-full rounded-md'>
              <div className='h-full bg-yellow-400 w-[30%]  rounded-md'></div>
            </div>
          </div>

          <div className='flex items-center gap-2 '>
            <p className='w-[100px]'>Minutes</p>
            <p className='text-green-400'>60%</p>
            <div className='h-4 border border-green-300 w-full rounded-md'>
              <div className='h-full bg-green-400 w-[60%]  rounded-md'></div>
            </div>
          </div>

        </div> */}

        <table className=' mx-auto w-[90%]'>
          <thead>
          <tr className=' bg-transparent text-black '>
            <th className='  py-4 text-left '>Apps</th>
            <th className='  py-4 text-left '>Data usage</th>
            <th className='  py-4 text-left '>Status</th>
            <th className='  py-4 text-left '>Priority</th>
            <th className='  py-4 text-center '>Network access</th>
          </tr>
          </thead>
          <tbody>
          {
            data.map((x ,  index ) => {
              return           <tr key={index} className=' rounded-lg  '>
              <td className=' text-left py-4  flex items-center  gap-4 '><img className='w-[30px] ' src={x.appImage} alt="" /> <p>{x.appName}</p></td>
              <td className=' text-left py-4  '>{x.dataUsage.toString().length > 4 ? (x.dataUsage / 1024).toString()+' GB' : x.dataUsage + " MO"}</td>
              <td className=' text-left py-4  text-green-500 rounded-full'>{x.status}</td>
              <td className=' text-left py-4  '>{x.priority}</td>
              <td className=' py-4  text-center'>{x.networkAccess}</td>
            </tr>
            })
          }
          </tbody>

          

        </table>
      </div>



    </div>
  )
}

export default Dashbaord