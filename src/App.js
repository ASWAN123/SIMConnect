import LandingPage from "./components/LandingPage";
import Header from "./components/LandingFolder/Header"
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Contextprovider } from "./ContextData";
import Dashbaord from "./components/userspace/Dashbaord";

function App() {




  return (
    <Contextprovider >
      <div className="App mx-auto container relative ">
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/dashbaord" element={<Dashbaord />}></Route>
        </Routes>
      </div>
    </Contextprovider>




  );
}

export default App;
