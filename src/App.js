import LandingPage from "./components/LandingPage";
import Header from "./components/LandingFolder/Header"
import { Route, Routes, useLocation , Navigate, useParams, useNavigate   } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";


function App() {
  return (
    <div className="App container mx-auto px-8 relative ">
      <Header />
      <Routes>
            <Route exact path="/" element={<LandingPage  />}></Route>
            <Route exact path="/login" element={<Login  />}></Route>
            <Route exact path="/signup" element={<Signup  />}></Route>
      </Routes>
      



    </div>
  );
}

export default App;
