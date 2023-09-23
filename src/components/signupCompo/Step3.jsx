import React, { useEffect, useMemo, useState } from "react";
import countryList from "react-select-country-list";
import Select from "react-select";
import { getPhoneNumbers } from "../../phoneData/db";

const Step3 = ({setValue , setValidephone }) => {
  const [picked, setPicked] = useState("");
  const [location, setLocation] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [phones, setPhones] = useState([]);






  useEffect(() => {
    let numbers = getPhoneNumbers(location.label);
    setPhones(numbers);
    return;
  }, [location]);




  const changeHandler = (value) => {
    setLocation(value);
    setValue('subscriptions.0.location',  value )
    setValue('subscriptions.0.phonenumber',  '' )
    setValidephone(false)
  };









  return (
    <section className="mt-8 w-[40%] mx-auto flex flex-col gap-2 ">
      <p>Choose your destination</p>
      <Select
        className="react-select"
        options={options}
        value={location}
        onChange={changeHandler}

      />

      <div className="flex flex-col gap-2 py-4">
        {phones?.slice(0, 3).map((x, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setPicked(x);
                setValue('subscriptions.0.phonenumber',  x )
                setValidephone(true)
              }}
              className="hover:bg-blue-300 cursor-pointer border py-4 px-2 rounded-md  flex gap-2 items-center justify-between"
            >
              <p>{x}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class={x === picked ? "w-6 h-6 text-blue-400" : "w-6 h-6"}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Step3;
