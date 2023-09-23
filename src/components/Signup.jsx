import React, { useEffect, useMemo, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useContextData } from "../ContextData";
import countryList from "react-select-country-list";
// import Select from "react-select";
// import { MdOutline4GPlusMobiledata } from "react-icons/md";
// import { BiMessageRounded } from "react-icons/bi";
// import { IoCallSharp } from "react-icons/io5";

import Step5 from "./signupCompo/Step5";
import Step4 from "./signupCompo/Step4";
import Step3 from "./signupCompo/Step3";
import Step2 from "./signupCompo/Step2";
import Step1 from "./signupCompo/Step1";
import Tofollow from "./signupCompo/Tofollow";

function Signup() {
  const { db , auth } = useContextData();
  const {
    watch,
    register,
    setValue,
    getValues,
    trigger,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    criteriaMode: "all",
  });

  // useEffect(() => {
  //   console.log(JSON.stringify(watch() ,  null ,  2))
  // } ,  [watch()])

  const [formstep, setFormstep] = useState(1);
  //  thats  because  the  watch() object  dosn't recognize  the  changes  so  the  the  compoennet  to  rerender after the  change  happend
  const [ validphone  ,  setValidephone]  = useState(false)
  const [ validpaymet  ,  setValidpaymet]  = useState(false)

  const nextFormstep = async () => {
    const data = await trigger();
    console.log(data);
    if (data) {
      setFormstep((cur) => cur + 1);
    }
  };
  const prevFormstep = () => {
    setFormstep((cur) => cur - 1);
  };

  return (
    <div className="mt-8 w-[90%]  items-center flex flex-col gap-2 mx-auto mb-[100px]">
      <Tofollow formstep={formstep} setFormstep={setFormstep} />

      <form action="" className=" w-full flex flex-col gap-2 justify-between ">
        {/* peronal  information */}

        {formstep === 1 && (
          <Step1
            register={register}
            errors={errors}
            trigger={trigger}
            getValues={getValues}
          />
        )}

        {/* select subscription */}
        {formstep === 2 && <Step2 setValue={setValue} />}

        {/* pick up a  phone number */}
        {formstep === 3 && <Step3 setValue={setValue} setValidephone={setValidephone} />}

        {/* checkout */}
        {formstep === 4 && <Step4 setValue={setValue} setValidpaymet={setValidpaymet} getValues={getValues} />}

        {/* congratulation */}
        {formstep === 5 && <Step5 watch={watch} />}

        {/* buttons */}
        <div className="w-full  flex gap-4 items-center justify-end mt-6 p-2 fixed z-30 bottom-4  right-8 ">
          {formstep >= 2 && formstep <= 4 && (
            <input
              type="button"
              value="Back"
              onClick={prevFormstep}
              className=" bg-blue-400  rounded-md  px-6 py-2 text-[16px] text-black cursor-pointer "
            />
          )}

          {formstep <= 4 && (
            <input
              type="button"
              value="Next"
              disabled={
                !isValid ||
                (formstep === 3 && ( !validphone || getValues("subscriptions.0.location") === undefined ))
                  ? true
                  : false ||
                    (formstep === 4 &&
                      getValues("subscriptions.0.payment") === undefined )
                  ? true
                  : false
              }
              onClick={nextFormstep}
              className="  bg-[#000435] disabled:bg-gray-300 disabled:text-gray-400  disabled:cursor-not-allowed   rounded-md  px-6 py-2 text-[16px] text-white cursor-pointer "
            />
          )}
        </div>
      </form>
      {/* <div>{JSON.stringify(watch(), null, 2)}</div> */}
    </div>
  );
}

export default Signup;
