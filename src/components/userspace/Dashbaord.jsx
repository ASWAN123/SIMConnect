import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Dashheader from "./Dash_header";
import { DotWave } from "@uiball/loaders";
import { useContextData } from '../../ContextData'
import {  onAuthStateChanged } from "firebase/auth";


const Dashbaord = () => {
  const { data ,  auth } = useContextData();
  const [Loading, setLoading] = useState(true);
  const [userID, setUserID] = useState();
  const navigate = useNavigate();


  // handling  user  logged  in state 
  useEffect(() => {
    // console.log(auth);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        setUserID(user.uid);
        setLoading(false);
      } else {
        navigate("/login");
        setLoading(false);
      }
    });
  }, []);

  let userData = data?.find(x => x.id === userID)

  return (
    <>
      {!Loading && userData && (
        <div className="text-[14px] relative container mx-auto">
          <Dashheader />

          <div id="main" className="">
            <Outlet  context={[userData]} />
          </div>

          {/* <IoChatboxEllipsesSharp size={50} color="blue" className='fixed bottom-4 right-10 cursor-pointer ' /> */}
        </div>
      )}
      {  Loading && !userData && (
        <div className="absolute  w-full h-screen z-11 top-0 bg-blue-950/80 flex justify-center items-center ">
          <DotWave size={47} speed={1} color="white" />
        </div>
      )}
    </>
  );
};

export default Dashbaord;
