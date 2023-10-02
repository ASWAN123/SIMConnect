import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Features() {
  let serviceData = [
    {
      imageSrc: "/global.png",
      title: "Global Connectivity",
      description:
        "Experience seamless connectivity wherever you go with our Sim cards. We provide extensive coverage across the globe, ensuring that you stay connected with friends, family, and colleagues, no matter where your travels take you.",
    },
    {
      imageSrc: "/plans.png",
      title: "Affordable Plans",
      description:
        "Our Sim card plans are designed to fit your budget. Whether you're a frequent traveler or just need a reliable local Sim card, we offer competitive rates and customizable packages to suit your communication needs.",
    },
    {
      imageSrc: "/quality.png",
      title: "High-Quality Networks",
      description:
        "We partner with leading network providers to deliver high-quality signals and fast data speeds. Enjoy crystal-clear calls and lightning-fast internet access, whether you're at home or abroad.",
    },
    {
      imageSrc: "/activation.png",
      title: "Easy Activation",
      description:
        "Say goodbye to complicated activation processes. Our Sim cards are user-friendly and come with simple activation instructions. You'll be up and running in no time, hassle-free.",
    },
    {
      imageSrc: "/service.png",
      title: "24/7 Customer Support",
      description:
        "Need assistance or have questions about your Sim card? Our dedicated customer support team is available around the clock to provide you with the help you need. Your satisfaction is our top priority.",
    },
    {
      imageSrc: "/delivery.png",
      title: "SIM Card Delivery",
      description:
        "Order your Sim card online, and we'll deliver it to your doorstep. It's a hassle-free way to ensure you're connected as soon as you arrive at your destination.",
    },
  ];

  const [showmore, setShowmore] = useState(false);

  return (
    <section id="features" className="container mx-auto flex flex-col gap-4 mt-8 ">
      <h2 className="text-[1.5rem]  my-8 font-semibold ">
        Our Features & Services
      </h2>

      <div className="flex gap-4 items-center mt-8 justify-center flex-wrap  bg-blue-200 p-8 rounded-md">
        {serviceData.map((x, index) => {
          return (
            <div
              key={index}
              className={
                (index === 4 || index === 5) && !showmore
                  ? " hidden  "
                  : "w-[250px] h-[400px] p-4 rounded-lg bg-white text-gray-600 shadow-md flex flex-col  gap-4 items-center "
              }
            >
              <img
                className="min-w-[70%] h-[150px] rounded-md "
                src={"/images"+x.imageSrc}
                alt=""
              />
              <p className="text-[16px]  text-gray-600 ">{x.title}</p>
              <p className="text-center ">{x.description}</p>
            </div>
          );
        })}
      </div>

      <div className="w-fit mx-auto">
        <button
          onClick={() => {
            setShowmore(!showmore);
          }}
          className="px-6 py-2   text-black border-b-2 border-orange-400"
        >
          {showmore ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
}

export default Features;
