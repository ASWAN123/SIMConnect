import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillGithub,
} from "react-icons/ai";
import LandingPage from "./components/LandingPage";
import Header from "./components/LandingFolder/Header"


function App() {
  return (
    <div className="App container mx-auto px-8 relative ">
      {/* header  jsx */}
      <Header />
      {/* landing page */}
      <LandingPage />


    </div>
  );
}

export default App;
