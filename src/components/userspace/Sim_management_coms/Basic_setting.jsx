import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';

const Basic_setting = () => {
  const [ userData ] = useOutletContext()


    const networkData = [
        {
          statusValue: 'Connected',
          macValue: 'A4-35-3A-B1-68-05',
          ipValue: '192.169.0.1',
          sim: 'SIM Card 1',
        }
      ];
      
    
      const deviceData = [
        {
          name: 'Iphone x',
          imageSrc: './iphone.png',
          macAddress: 'A4:35:3A:B1:68:05',
        },
        {
          name: 'iPad',
          imageSrc: './ipad.png',
          macAddress: '1B:2C:3D:4E:5F:6A',
        },
        {
          name: 'Smart TV',
          imageSrc: './Smart tv.png',
          macAddress: '2A:3B:4C:5D:6E:7F',
        },
        {
          name: 'Laptop',
          imageSrc: './laptop.png',
          macAddress: '3A:4B:5C:6D:7E:8F',
        },
        {
          name: 'Desktop',
          imageSrc: './desktop.png',
          macAddress: '4B:5C:6D:7E:8F:9A',
        },
      ];
      
    
      const [settingsData , setSettingsData] =useState( [
        {
          name: 'Bandwidth Control',
          options: [
            { label: 'Enable', active: true },
            { label: 'Disable', active: false },
          ],
        },
        {
          name: 'MAC Filtering',
          options: [
            { label: 'Enable', active: true },
            { label: 'Disable', active: false },
          ],
        },
        {
          name: 'Guest Network',
          options: [
            { label: 'Enable', active: false },
            { label: 'Disable', active: true },
          ],
        },
        {
          name: 'Firewall',
          options: [
            { label: 'Enable', active: true },
            { label: 'Disable', active: false },
          ],
        },
        {
          name: 'Parental Control',
          options: [
            { label: 'Enable', active: false },
            { label: 'Disable', active: true },
          ],
        },
      ]);

  const handlechanges  =(position) => {
    let clonedata = settingsData.map( (x , index) => {
      if(index  === position){
        console.log('here 1')
        let y = x.options.map((w) => {
          return {...w ,  active:!w.active}
        })
        let q = {...x ,  options:y}
        return q

      }
      return x 
    })

    console.log(clonedata)

    setSettingsData(clonedata)

  }


  return (
    <section className=" w-full  rounded-md  p-2">
    <h3 className='w-full border-b-2 mt-2 mb-3 py-2 text-[20px] font-semibold'>Basic Setting</h3>
    <div>

      {/* <p className="text-[16px] mb-4 font-semibold">Status</p> */}

      <div className="flex gap-4 items-center justify-between bg-white p-4 shadow-md rounded-md">
        {
          networkData.map((w ,  index) => {
            return  <>
                          <p>
          Netword Status :{" "}
          <span className="text-green-500">{w.statusValue}</span>
        </p>
        <p>
          MAC Address : <span className="">{w.macValue}</span>
        </p>
        <p>
          IP Address : <span className="text-blue-500">{w.ipValue}</span>
        </p>
        <select name="" id="" className=' bg-transparent outline-none border-none'>Sim card
        <label htmlFor="">Sim card</label>
        {
          userData.subscriptions.map((x ,  index) => {
            return <option  value="">Sim card {index+1}</option>
          })
        }
        
        </select>
        
          
        
        </>
          })
        }

      </div>
    </div>
    <div className="mt-4 w-full flex gap-4  justify-between">
      {/* connected  devices */}
      <div className="w-1/2 ">
        <p className="text-[16px] mb-4 font-semibold">Connect Devices</p>
        <ul className="flex flex-col gap-2  justify-between bg-white p-2 shadow-md rounded-md ">
          {
            deviceData.map((y , index) => {
              return                 <li key={index} className="flex gap-2 items-center justify-between">
              <div>
                <img className="w-[30px]" src={y.imageSrc} alt="" />
                <p className="text-gray-500">{y.name}</p>
              </div>
              <p className="mac address">{y.macAddress}</p>
            </li>
            })
          }

        </ul>
      </div>
      {/* setting */}
      <div className="  w-1/2  ">

        <p className="text-[16px] mb-4 font-semibold">Quick Settings</p>

        <div className="flex flex-col gap-2 bg-white p-2  shadow-md rounded-md">
          {
            settingsData.map((x ,  index ) => {
              return                 <div className="flex gap-2 items-center justify-between">
              <p>{x.name}</p>
              <div className="flex gap-2 items-center">
                <label htmlFor={x.name} className="flex items-center gap-1">
                  <input type="radio" onChange={()=> {handlechanges (index)}} checked={x.options[0].active} name={x.name} className=" cursor-pointer"  />
                  {x.options[0].label}
                </label>
                <label htmlFor={x.name} className="flex items-center gap-1"> 
                  <input type="radio" onChange={() => {handlechanges(index)}} checked={x.options[1].active} name={x.name} className=" cursor-pointer" />
                  {x.options[1].label}
                </label>
              </div>
            </div>
            })
          }

          


          
          
          
        </div>
      </div>
    </div>
  </section>
  )
}

export default Basic_setting
