import {  useEffect, useState } from "react";
import LandingPage from "./components/LandingPage";
import Header from "./components/LandingFolder/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Contextprovider } from "./ContextData";
import Dashbaord from "./components/userspace/Dashbaord";
import Maindash from "./components/userspace/Dash_main";
import Orders from "./components/userspace/Orders";
import Simcardmanagement from "./components/userspace/Sim_card_management";


import { auth } from "./firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import { Profile } from "./components/userspace/Profile";
import OrderPage from "./components/userspace/OrderPage";
import Errorpage from "./components/Errorpage";
import { Support } from "./components/userspace/Support";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let location = useLocation();
  let path = location.pathname;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <>
      <Contextprovider>
        <div className="App mx-auto px-4  relative ">
          {!path.includes("account") && !path.includes("error") && (
            <Header isLoggedIn={isLoggedIn} />
          )}
          <Routes>
            <Route exact path="/" element={<LandingPage />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/error" element={<Errorpage />}></Route>
            <Route exact path="/account" element={<Dashbaord />}>
              <Route index element={<Maindash />} />
              <Route exact path="orders" element={<Orders />} />
              <Route exact path="Setting" element={<Simcardmanagement />} />
              <Route exact path="profile" element={<Profile />} />
              <Route exact path="neworder" element={<OrderPage />} />
              <Route exact path="support" element={<Support />} />
            </Route>
          </Routes>
        </div>
      </Contextprovider>
    </>
  );
}

export default App;
