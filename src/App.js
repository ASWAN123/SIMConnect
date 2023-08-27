import Footer from "./components/Footer";
import Header from "./components/Header";
import Logo from "./components/Logodesign";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillGithub,
} from "react-icons/ai";
import Main from "./components/Main";

function App() {
  return (
    <div className="App container mx-auto px-4 relative ">
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
