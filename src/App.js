import { useContext, useEffect, useState } from "react";
import LandingPage from "./components/LandingPage";
import Header from "./components/LandingFolder/Header"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Contextprovider, useContextData } from "./ContextData";
import Dashbaord from "./components/userspace/Dashbaord";
import Maindash from "./components/userspace/Dash_main";
import Orders from "./components/userspace/Orders";
import  Simcardmanagement from './components/userspace/Sim_card_management'
import Billinghistory from './components/userspace/Billing_history'
import Networkmap from './components/userspace/Networkmap'
import Devices from "./components/userspace/Devices";
import Referafriend from "./components/userspace/Referafriend";
import Orderdetails from "./components/userspace/Orderdetails";
import { getPhoneNumbers } from "./phoneData/db";
import { DotWave } from '@uiball/loaders'
import { auth } from './firebaseconfig'
import {  onAuthStateChanged } from "firebase/auth";
import { Profile } from "./components/userspace/Profile";

function App() {
  // const [Loading , setLoading] = useState(true);
  let location = useLocation()
  let path  = location.pathname
  let navigate = useNavigate()



  // useEffect(() => {
  //   console.log(auth)
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const uid = user.uid;
  //       console.log(uid)
  //       setLoading(false)
  //       navigate('/account')
        
  //     } else {
  //       console.log('log out')
  //       setLoading(false)
        
  //     }
  //   });
  // }, []);




  return (
    <>
     <Contextprovider >
      <div className="App mx-auto px-4  relative ">
        { !path.includes('account') && <Header /> }
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/account" element={<Dashbaord />}>
            <Route index element={<Maindash />} />
            <Route exact path="orders" element={ <Orders />  } />
            <Route exact path="Setting" element={ <Simcardmanagement />  } />
            <Route exact path="profile" element={ <Profile />  } />
          </Route>
        </Routes>
      </div>
    </Contextprovider> 
      { /* { Loading &&     <div className="absolute  w-full h-screen z-11 top-0 bg-blue-950/80 flex justify-center items-center ">
        <DotWave
        size={47}
        speed={1}
        color="white"
        />
</div> } */}
</>




  );
}

export default App;
