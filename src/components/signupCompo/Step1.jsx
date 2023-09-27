import React, { useState } from "react";
import  { AiOutlineEye  ,  AiOutlineEyeInvisible } from 'react-icons/ai'

const Step1 = ({ register, errors }) => {

  const [ showpassword  , setShowpassword] = useState(false)




  return (
    <section className="mt-8 w-[40%] mx-auto flex flex-col gap-2 ">
      <div className="w-full flex  gap-4 items-center justify-center">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="First_name" className="text-gray-600 text-[14px]">
            {" "}
            First Name
          </label>
          <input
            type="text"
            name="first_name"
            {...register("first_name", {
              required: "First name is required",
              validate: (value) =>
                value.trim() !== "" || "First name cannot be empty",
            })}
            className=" placeholder:text-red-400 placeholder:text-[12px] text-[14px] px-2 py-1 w-full outline-none h-10 rounded-md bg-transparent border border-gray-300   "
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="First_name" className="text-gray-600 text-[14px]">
            Last Name
          </label>
          <input
            type="text"
            name="last_name"
            // placeholder={errors.last_name && errors.last_name.message}
            {...register("last_name", {
              required: "Last name is required",
              validate: (value) =>
                value.trim() !== "" || "Last name cannot be empty",
            })}
            className="placeholder:text-red-400 placeholder:text-[12px] px-2 py-1 w-full outline-none h-10 rounded-md bg-transparent border border-gray-300   "
          />
        </div>
      </div>
      <label htmlFor="First_name" className="text-gray-600 text-[14px]">
        Email
      </label>
      <input
        name="email"
        {...register("email", {
          required: "Email is required",
          validate: {
            maxLength: (v) =>
              v.length <= 50 || "The email should have at most 50 characters",
            matchPattern: (v) =>
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
              "Email address must be a valid address",
          },
        })}
        className="placeholder:text-red-400 placeholder:text-[12px] px-2 py-1 w-full outline-none h-10 rounded-md bg-transparent border border-gray-300   "
      />

      <label htmlFor="First_name" className="text-gray-600 text-[14px] flex items-center gap-4  justify-between pr-2 ">
        Password
        <span>
        {
         !showpassword && <AiOutlineEye color="lightgray" size={18}   onClick={() => {setShowpassword(!showpassword)}} />
        }
        {
         showpassword && <AiOutlineEyeInvisible color="lightgray" size={18}  onClick={() => {setShowpassword(!showpassword)}}/>
        }
      </span>
      </label>
      <input
        name="password"
        {
          ...register("password", {
            required: "Password is required",
            validate: {
              minLength: (v) =>
                v.trim().length >= 8 || "Password should be at least 8 characters long",
              containsUppercase: (v) =>
                /[A-Z]/.test(v) || "Password should contain at least one uppercase letter",
              containsLowercase: (v) =>
                /[a-z]/.test(v) || "Password should contain at least one lowercase letter",
              containsNumber: (v) =>
                /\d/.test(v) || "Password should contain at least one number",
            },
          })
        }
        type= { showpassword ? "text" : "password" }
      
        className="placeholder:text-red-400 placeholder:text-[12px] px-2 py-1 w-full outline-none h-10 rounded-md bg-transparent border border-gray-300   "
      />

      <div className=" flex gap-4 w-full ">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="Address" className="text-gray-600 text-[14px]">
            Address
          </label>
          <input
            
            name="address"
            {
              ...register("address", {
                required: "Address is required",
                validate: {
                  minLength: (v) =>
                    v.length >= 5 || "Address should be at least 5 characters long",
                },
              })
            }
            className="placeholder:text-red-400 placeholder:text-[12px] px-2 py-1 w-full outline-none h-10 rounded-md bg-transparent border border-gray-300   "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="Zipcode" className="text-gray-600 text-[14px]">
            Zipcode
          </label>
          <input
            type="text"
            name="Zipcode"
            {...register("Zipcode", {
              required: "Zipcode is required",
              pattern: {
                value: /^\d{5}(-\d{4})?$/,
                message: "Zip code must be in the format XXXXX or XXXXX-XXXX",
              },
              validate: (value) =>
                value.trim() !== "" || "Zipcode cannot be empty" ,
            })}
            className="placeholder:text-red-400 placeholder:text-[12px]  px-2 py-1 w-full outline-none h-10 rounded-md bg-transparent border border-gray-300   "
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 text-red-400 text-[12px]">
        {errors.first_name && <p>* {errors.first_name.message}</p>}
        {errors.last_name && <p>* {errors.last_name.message}</p>}
        {errors.email && <p>* {errors.email.message}</p>}
        {errors.password && <p>* {errors.password.message}</p>}
        {errors.address && <p>* {errors.address.message}</p>}
        {errors.Zipcode && <p>* {errors.Zipcode.message}</p>}
      </div>
    </section>
  );
};

export default Step1;
