import LandingPage from "./components/LandingPage";
import Header from "./components/LandingFolder/Header"
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Contextprovider } from "./ContextData";
import Dashbaord from "./components/userspace/Dashbaord";
import Maindash from "./components/userspace/Maindash";
import Orders from "./components/userspace/Orders";
import  Simcardmanagement from './components/userspace/Simcardmanagement'
import Billinghistory from './components/userspace/Billinghistory'
import Networkmap from './components/userspace/Networkmap'
import Devices from "./components/userspace/Devices";
import Referafriend from "./components/userspace/Referafriend";
function App() {




  return (
    <Contextprovider >
      <div className="App mx-auto  container relative ">
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/dashboard" element={<Dashbaord />}>
            <Route index element={<Maindash />} />
            <Route exact path="orders" element={ <Orders />  } />
            <Route exact path="sim-card-management" element={ <Simcardmanagement />  } />
            <Route exact path="billing-history" element={ <Billinghistory />  } />
            <Route exact path="network-coverage-map" element={ <Networkmap />  } />
            <Route exact path="devices" element={ <Devices />  } />
            <Route exact path="refer-a-friend" element={ <Referafriend />  } />
            

          </Route>
        </Routes>
      </div>
    </Contextprovider>




  );
}

export default App;
