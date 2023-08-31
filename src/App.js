import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillGithub,
} from "react-icons/ai";
import { BsSimFill } from "react-icons/bs"

function App() {
  return (
    <div className="App container mx-auto px-4 relative ">
      {/* header  jsx */}
      <header className="py-2 flex gap-4 items-center justify-between">
        <div className="flex gap-2 items-center font-semibold">
          <BsSimFill size={28} color="blue" /> SIM-Connect
        </div>
        <ul className="flex gap-4">
          <li>Discover</li>
          <li>Activation & Setup</li>
          <li>Plans & Pricing</li>
          <li>Features</li>
          <li>Support & FAQs</li>
        </ul>
        <button className="text-blue-400 capitalize ">member area</button>

      </header>

      <main className="border-green-500 px-2 h-[2000px]">

        {/* main jsx */}
        <section className="h-[500px] flex items-center gap-4 mt-8 ">
          <div className="flex-1 flex flex-col gap-4 ">
            <h1 className="text-[2rem] font-semibold">Welcome to <span className="text-blue-700">SIM-Connect</span> - Your Ultimate SIM Card Provider!</h1>
            <p className="pl-4 ">Discover seamless connectivity with SIMConnect's cutting-edge SIM card solutions. Whether you're a globe-trotting traveler, a digital nomad, or simply looking for reliable mobile service, we've got you covered. Our high-performance SIM cards offer lightning-fast data speeds, and hassle-free activation.</p>
            <p className="pl-4 ">Join the SIMConnect revolution today and unlock a world of unparalleled connectivity. Whether it's for business, travel, or everyday use, trust us to keep you connected effortlessly.</p>
            <button className="ml-4 w-[250px] border px-6 py-2 text-lg text-white rounded-md bg-emerald-600 ">Try For free</button>
          </div>
          <div className="flex-1">
            <img src="./image1.png" className="w-[500px]  mx-auto" alt="" />
          </div>
        </section>

        {/* features jsx */}
        <section className="flex flex-col gap-4 mt-8">
          <h2 className="text-[1.5rem] font-semibold">Explore Our Features</h2>

          <ul className="pl-4 py-4 flex  justify-center gap-4 flex-wrap">
            <li className="bg-blue-200 min-w-[200px] max-w-[200px] flex flex-col gap-8 items-center rounded-lg py-4">
              <h3 className=" font-medium">Global Coverage</h3>
              <p className="text-center text-[14px]">Stay connected across continents with our wide-ranging network coverage, ensuring you're never out of reach.</p>
            </li>
            <li className="bg-blue-200 min-w-[200px] max-w-[200px] flex flex-col gap-8 items-center rounded-lg py-4">
              <h3 className=" font-medium">High-Speed Data</h3>
              <p className="text-center text-[14px]">Experience the power of rapid data connectivity for smooth browsing, streaming, and online activities.</p>
            </li>
            <li className="bg-blue-200 min-w-[200px] max-w-[200px] flex flex-col gap-8 items-center rounded-lg py-4">
              <h3 className=" font-medium">Easy Activation</h3>
              <p className="text-center text-[14px]">Say goodbye to complicated setup processes. Activate your SIM card in just a few clicks and start using it instantly.</p>
            </li>
            <li className="bg-blue-200 min-w-[200px] max-w-[200px] flex flex-col gap-8 items-center rounded-lg py-4">
              <h3 className=" font-medium">Flexible Plans</h3>
              <p className="text-center text-[14px]">Choose from a variety of plans tailored to your usage. Whether you need data, minutes, or a combination of both, we have a plan that suits you.</p>
            </li>
            <li className="bg-blue-200 min-w-[200px] max-w-[200px] flex flex-col gap-8 items-center rounded-lg py-4">
              <h3 className=" font-medium">24/7 Customer Support</h3>
              <p className="text-center text-[14px]">Have a question or need assistance? Our dedicated support team is available around the clock to provide you with the help you need.</p>
            </li>
          </ul>

        </section>

        {/* choose jsx */}
        <section className="flex flex-col gap-4 mt-8">
          <h2 className="text-[1.5rem] font-semibold">Why Choose SIM-Connect</h2>
          <p className="pl-4">At SIMConnect, we're not just a SIM card provider; we're your partners in staying connected. Our commitment to reliability, speed, and customer satisfaction sets us apart:</p>

          <div className="pl-8 pr-2 flex flex-col gap-2">
            <details className="bg-gray-300 hover:cursor-pointer py-2 px-2 rounded-md">
              <summary className="text-[18px] font-normal">Reliable Connections</summary>
              <p className="text-[14px] pl-8 text-gray-700">Count on us for consistent and dependable network connections wherever you go.</p>
            </details>


            <details className="bg-gray-300 hover:cursor-pointer py-1 px-2 rounded-md">
              <summary className="text-[18px] font-normal">Transparent Pricing</summary>
              <p className="text-[14px] pl-8 text-gray-700">No hidden fees or surprises. Our pricing is straightforward , ensuring you get the best value for your money.</p>
            </details>


            <details className="bg-gray-300 hover:cursor-pointer py-1 px-2 rounded-md">
              <summary className="text-[18px] font-normal">Innovation</summary>
              <p className="text-[14px] pl-8 text-gray-700">We stay at the forefront of technology, delivering the latest advancements in mobile connectivity to enhance your experience.</p>
            </details>


            <details className="bg-gray-300 hover:cursor-pointer py-1 px-2 rounded-md">
              <summary className="text-[18px] font-normal">User-Friendly Interface</summary>
              <p className="text-[14px] pl-8 text-gray-700">Our user-friendly online portal lets you manage your account, track usage, and top up with ease.</p>
            </details>

          </div>


        </section>


        {/* pricing */}
        <section className="flex flex-col gap-4 mt-8 ">
          <h2 className="text-[1.5rem] font-semibold">Plans & Pricing</h2>
          <div id="pricing">
            {/* basic */}
            <div className="flex flex-col gap-2 items-center justify-between w-[250px]">
              <div className="flex flex-col gap-4 relative">
                <img src="./plans/basic.png" alt="" />
                <p className=" absolute w-full text-center top-2 text-white font-semibold text-[20px]">Basic</p>
                <p className="text-center text-green-700 font-semibold text-[18px]">Free</p>
              </div>
              <div className="flex flex-col items-center gap-2 ">
                <p className="w-full text-[14px] text-center border-b border-b-green-600 ">Data: 2GB</p>

                <p className="w-full text-[14px] text-center border-b border-b-green-600 ">Minutes: 100</p>

                <p className="w-full text-[14px] text-center border-b border-b-green-600 ">SMS: 50</p>

                <p className="w-full text-[14px] text-center border-b border-b-green-600 ">Coverage: Nationwide</p>

                <p className="text-[12px]">Roaming: Stay connected even when traveling abroad with affordable international roaming options.</p>

                <p className="text-[12px]">Data Add-ons: Need more data? Easily add extra data to your plan whenever you need it.</p>
              </div>

            </div>
            {/*  */}
          </div>

        </section>







      </main>

    </div>
  );
}

export default App;
