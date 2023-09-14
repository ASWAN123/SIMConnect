import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContextData } from "../ContextData";
import countryList from "react-select-country-list";
// import Select from "react-select";
// import { MdOutline4GPlusMobiledata } from "react-icons/md";
// import { BiMessageRounded } from "react-icons/bi";
// import { IoCallSharp } from "react-icons/io5";

import Step5 from "../signupCompo/Step5";
import Step4 from "../signupCompo/Step4";
import Step3 from "../signupCompo/Step3";
import Step2 from "../signupCompo/Step2";
import Step1 from "../signupCompo/Step1";
import Tofollow from "../signupCompo/Tofollow";

function Signup() {
  const { db, auth } = useContextData();
  // const { register, handleSubmit } = useForm();

  const [formstep, setFormstep] = useState(1);

  const nextFormstep = () => {
      setFormstep((cur) => cur + 1);
    };
    const prevFormstep = () => {
      setFormstep((cur) => cur - 1);
    };
  


  return (
    <div className="mt-8 w-[90%]  items-center flex flex-col gap-2 mx-auto mb-[100px]">

      <Tofollow formstep = {formstep} setFormstep ={setFormstep}    />

      <form action="" className=" w-full flex flex-col gap-2 justify-between ">
        {/* peronal  information */}

        {formstep === 1 && <Step1 />}

        {/* select subscription */}

        {formstep === 2 && <Step2 />}

        {/* pick up a  phone number */}
        {formstep === 3 && <Step3 />}

        {/* checkout */}
        {formstep === 4 && <Step4 />}

        {/* congratulation */}
        {formstep === 5 && <Step5 />}

        {/* buttons */}
        <div className="w-full  flex gap-4 items-center justify-end mt-6 p-2 fixed z-30 bottom-4  right-8 ">
          {formstep >= 2 && formstep <= 5 && (
            <input
              type="button"
              value="Back"
              onClick={prevFormstep}
              className="   rounded-md  px-6 py-2 text-[16px] text-black cursor-pointer "
            />
          )}

          {formstep <= 4 && (
            <input
              type="button"
              value="Next"
              onClick={nextFormstep}
              className="   rounded-md  px-6 py-2 text-[16px] text-black cursor-pointer "
            />
          )}

          {formstep === 5 && (
            <input
              type="button"
              value="Confirm"
              className="rounded-md  px-6 py-2 text-[16px] text-black cursor-pointer "
            />
          )}
        </div>
      </form>
    </div>
  );
}

export default Signup;
