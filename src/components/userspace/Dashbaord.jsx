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



  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserID(user.uid);
        setLoading(false);
      } else {
        navigate("/login");
        setLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
    })

  } , [])

  let userData = data?.find(x => x.id === userID)

  return (
    <>
      {!Loading && userData && (
        <div className="text-[14px] container mx-auto ">
          <Dashheader />

          <div id="main" className="">
            <Outlet  context={[userData]} />
          </div>

          
        </div>
      )}
      {  Loading && !userData && (
        <div className="absolute  w-full h-screen z-11 top-0 bg-[#f9f9f9] flex justify-center items-center ">
          <DotWave size={47} speed={1} color="black" />
        </div>
      )}
    </>
  );
};

export default Dashbaord;
