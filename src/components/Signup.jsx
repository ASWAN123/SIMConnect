import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContextData } from "../ContextData";
import countryList from "react-select-country-list";
import Select from "react-select";
import { MdOutline4GPlusMobiledata } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";
import { IoCallSharp } from "react-icons/io5";

function Signup() {
  const { db, auth } = useContextData();
  const { register, handleSubmit } = useForm();
  const [formstep, setFormstep] = useState(1);
  const options = useMemo(() => countryList().getData(), []);
  const [value, setValue] = useState("");
  const [subscription, setSubscription] = useState(0);
  const plans = [
    {
      name: "Basic",
      price: "0",
      data: "2GB",
      minutes: "100",
      sms: "50",
      coverage: "Nationwide",
    },
    {
      name: "Standard",
      price: "25",
      data: "5GB",
      minutes: "Unlimited",
      sms: "Unlimited",
      coverage: "Nationwide",
    },
    {
      name: "Premium",
      price: "50",
      data: "15GB",
      minutes: "Unlimited",
      sms: "Unlimited",
      coverage: "Nationwide",
    },
    {
      name: "Pro",
      price: "100",
      data: "Unlimited",
      minutes: "Unlimited",
      sms: "Unlimited",
      coverage: "Worldwide",
    },
  ];

  const changeHandler = (value) => {
    setValue(value);
  };

  const nextFormstep = () => {
    setFormstep((cur) => cur + 1);
  };
  const prevFormstep = () => {
    setFormstep((cur) => cur - 1);
  };

  //   const onSubmit = async (data) => {
  //     console.log(auth);
  //     await createUserWithEmailAndPassword(auth, data.Email, data.Password)
  //       .then((userCredential) => {
  //         const user = userCredential.user;
  //         let dataclone = { ...data };
  //         delete dataclone.Password;
  //         db.collection("simconnect")
  //           .doc(user.uid)
  //           .set({ user: { ...dataclone } });
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         console.log(errorCode, errorMessage);
  //       });
  //   };

  return (
    <div className="mt-8 w-[90%]  items-center flex flex-col gap-2 mx-auto mb-[100px]">
      <section className="text-gray-500 py-2 flex  gap-4 text-[14px] items-center w-full justify-between px-8  capitalize">
        <div className="w-full text-blue-500 flex flex-col items-center gap-2  justify-center text-center">
          <p className="">Personal information</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>

        <hr className="w-full" />

        <div className="w-full flex flex-col items-center gap-2   justify-center text-center">
          <p>Subscription</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </div>

        <hr className="w-full" />

        <div className=" w-full flex flex-col items-center gap-2   justify-center text-center">
          <p>Location</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </div>
        <hr className="w-full" />

        <div className="w-full flex flex-col items-center gap-2  justify-center  text-center">
          <p>Pick a number</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
        </div>

        <hr className="w-full" />

        <div className="w-full flex flex-col items-center gap-2  justify-center text-center ">
          <p>payment</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
            />
          </svg>
        </div>
      </section>

      <form action="" className=" w-full flex flex-col gap-2 justify-between ">
        {/* peronal  information */}

        {formstep === 1 && (
          <section className="mt-[5%] w-[40%] mx-auto flex flex-col gap-2 ">
            <div className="w-full flex  gap-4 items-center justify-center">
              <div className="w-full flex flex-col gap-2">
                <label
                  htmlFor="First_name"
                  className="text-gray-600 text-[14px]"
                >
                  {" "}
                  First Name
                </label>
                <input
                  type="text"
                  className="text-[14px] px-2 py-1 w-full outline-none h-10 rounded-md bg-transparent border border-gray-300  placeholder:text-gray-600 placeholder:text-[14px] "
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label
                  htmlFor="First_name"
                  className="text-gray-600 text-[14px]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="px-2 py-1 w-full outline-none h-10 rounded-md bg-transparent border border-gray-300  placeholder:text-gray-600 placeholder:text-[14px] "
                />
              </div>
            </div>
            <label htmlFor="First_name" className="text-gray-600 text-[14px]">
              Email
            </label>
            <input
              type="text"
              className="px-2 py-1 w-full outline-none h-10 rounded-md bg-transparent border border-gray-300  placeholder:text-gray-600 placeholder:text-[14px] "
            />
            <label htmlFor="First_name" className="text-gray-600 text-[14px]">
              {" "}
              Password
            </label>
            <input
              type="text"
              className="px-2 py-1 w-full outline-none h-10 rounded-md bg-transparent border border-gray-300  placeholder:text-gray-600 placeholder:text-[14px] "
            />
          </section>
        )}

        {/* select  country */}

        {formstep === 2 && (
          <section className="mt-[5%] w-[40%] mx-auto flex flex-col gap-2 ">
            <Select
              className="react-select"
              options={options}
              value={value}
              onChange={changeHandler}
            />
          </section>
        )}
        
        {/* subscription  plans */}
        {formstep === 3 && (
          <section className=" w-[80%] mx-auto flex flex-col gap-2 ">
            <div className="flex gap-5 justify-center p-2 ">
              {plans.map((x, index) => {
                return (
                  <div
                    key={index}
                    className="cursor-pointer min-w-[250px] min-h-[250px] bg-gray-100 border rounded-lg flex flex-col justify-between p-4 gap-4 "
                  >
                    <p className="text-[#000435] text-[16px] flex gap-2">
                      {x.name}
                      {index === subscription && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class={ x.name === "Pro" ? "w-6 h-6  text-orange-400"  : "w-6 h-6  text-green-500" }
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      )}
                    </p>
                    <p className="text-[#000435]">Plan Details:</p>
                    <ul className="flex flex-col gap-1 ">
                      <li className="text-gray-600 pl-1 flex gap-1 items-center ">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class={ x.name === "Pro" ? "w-6 h-6  text-orange-400"  : "w-6 h-6  text-blue-400" }
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg> Data: {x.data}
                      </li>
                      <li className="text-gray-600 pl-1 flex gap-1 items-center ">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class={ x.name === "Pro" ? "w-6 h-6  text-orange-400"  : "w-6 h-6  text-blue-400" }
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>Minutes: {x.minutes}
                      </li>
                      <li className="text-gray-600 pl-1 flex gap-1 items-center ">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class={ x.name === "Pro" ? "w-6 h-6  text-orange-400"  : "w-6 h-6  text-blue-400" }
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg> SMS: {x.sms}
                      </li>
                      <li className="text-gray-600 pl-1 flex gap-1 items-center ">
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                          />
                        </svg> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class={ x.name === "Pro" ? "w-6 h-6  text-orange-400"  : "w-6 h-6  text-blue-400" }
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Coverage: {x.coverage}
                      </li>
                    </ul>
                    <div className="px-2 flex  gap-2  items-center ">
                      <p className="text-[#000435] text-[28px] font-semibold ">
                        {" "}
                        ${x.price}
                      </p>
                      <p className="text-gray-600 ">/ a month</p>
                    </div>
                    <input
                      onClick={() => {
                        setSubscription(index);
                      }}
                      type="button"
                      value="Select"
                      className={
                        index === subscription
                          ?  x.name === "Pro" ? "px-6 py-2 bg-orange-400 w-[90%] mx-auto cursor-pointer  rounded-sm text-white " :"px-6 py-2 bg-green-500 w-[90%] mx-auto cursor-pointer  rounded-sm text-white "
                          : "px-6 py-2 w-[90%] bg-[#000435]  mx-auto cursor-pointer  rounded-sm text-white "
                      }
                    />
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* pick a  phone  number */}
        {formstep === 4 && (
          <section className=" w-[80%] mx-auto flex flex-col gap-2 ">
            
          </section>
        )}

        <div className="w-full  flex gap-4 items-center justify-end mt-6 p-2">
          {formstep >= 2 && (
            <input
              type="button"
              value="Back"
              onClick={prevFormstep}
              className="   rounded-md  px-6 py-2 text-[16px] text-black cursor-pointer "
            />
          )}
          <input
            type="button"
            value="Next"
            onClick={nextFormstep}
            className="   rounded-md  px-6 py-2 text-[16px] text-black cursor-pointer "
          />
        </div>
      </form>
    </div>
  );
}

export default Signup;
