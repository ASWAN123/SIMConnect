import LandingPage from "./components/LandingPage";
import Header from "./components/LandingFolder/Header"
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Contextprovider } from "./ContextData";
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

function App() {

  let location = useLocation()
  let path  = location.pathname




  return (
    <Contextprovider >
      <div className="App mx-auto container relative ">
        { !path.includes('account') && <Header /> }
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/account" element={<Dashbaord />}>
            <Route index element={<Maindash />} />
            <Route exact path="orders" element={ <Orders />  } />
            {/* <Route exact path="sim-card-management" element={ <Simcardmanagement />  } />
            <Route exact path="billing-history" element={ <Billinghistory />  } />
            <Route exact path="network-coverage-map" element={ <Networkmap />  } />
            <Route exact path="devices" element={ <Devices />  } />
            <Route exact path="refer-a-friend" element={ <Referafriend />  } /> */}
            
          </Route>
        </Routes>
      </div>
    </Contextprovider>




  );
}

export default App;
