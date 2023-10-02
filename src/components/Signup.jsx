import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";


import Step5 from "./signupCompo/Step5";
import Step4 from "./signupCompo/Step4";
import Step3 from "./signupCompo/Step3";
import Step2 from "./signupCompo/Step2";
import Step1 from "./signupCompo/Step1";
import Tofollow from "./signupCompo/Tofollow";
import { useLocation } from "react-router-dom";

function Signup({userData}) {
  const  location = useLocation() ;
  const  path  = location.pathname ;



  const {
    watch,
    register,
    setValue,
    getValues,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    criteriaMode: "all",
  });



  const [formstep, setFormstep] = useState(1);

  const [ validphone  ,  setValidephone]  = useState(false)
  // const [ validpaymet  ,  setValidpaymet]  = useState(false)

  const nextFormstep = async () => {
    const data = await trigger();
    if (data) {
      setFormstep((cur) => cur + 1);
    }
  };
  const prevFormstep = () => {
    setFormstep((cur) => cur - 1);
  };


  useEffect(() => {
    if(path === '/SIMConnect/account/neworder'){
      setFormstep(2)
      
    }
  } ,  [] )

  return (
    <div className="mt-8 w-[90%]  items-center flex flex-col gap-2 mx-auto mb-[100px]">
      <Tofollow formstep={formstep} setFormstep={setFormstep} />

      <form action="" className=" w-full flex flex-col gap-2 justify-between ">
        {/* peronal  information */}

         { path !== '/SIMConnect/account/neworder' && formstep === 1 && (
          <Step1
            register={register}
            errors={errors}
            trigger={trigger}
            getValues={getValues}
            setValue={setValue}
            
          />
        )}

        {/* select subscription */}
        {formstep === 2 && <Step2 setValue={setValue} />}

        {/* pick up a  phone number */}
        {formstep === 3 && <Step3 setValue={setValue} setValidephone={setValidephone} />}

        {/* checkout */}
        {formstep === 4 && <Step4 setValue={setValue}  getValues={getValues} />}

        {/* congratulation */}
        {formstep === 5 && <Step5 watch={watch }  userData= {userData}   />}

        {/* buttons */}
        <div className="w-full  flex gap-4 items-center justify-end mt-6 p-2 fixed z-30 bottom-4  right-8 ">
          {formstep >= 2 && path === "/SIMConnect/signup" && formstep <= 4 && (
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
                (formstep === 3 &&  ( !validphone || getValues("subscriptions.0.location") === undefined ))
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
      <div className="hidden">{JSON.stringify(watch(), null, 2)}</div>
    </div>
  );
}

export default Signup;
