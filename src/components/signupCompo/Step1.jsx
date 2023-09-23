import React from "react";

const Step1 = ({ register, errors, getValues, trigger }) => {
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
        type="text"
        name="email"
        {...register("email", {
          required: "Email is required",
          validate: (value) => value.trim() !== "" || "Email cannot be empty",
        })}
        className="placeholder:text-red-400 placeholder:text-[12px] px-2 py-1 w-full outline-none h-10 rounded-md bg-transparent border border-gray-300   "
      />

      <label htmlFor="First_name" className="text-gray-600 text-[14px]">
        Password
      </label>
      <input
        type="text"
        name="password"
        {...register("password", {
          required: "Password is required",
          validate: (value) =>
            value.trim() !== "" || "Password cannot be empty",
        })}
        className="placeholder:text-red-400 placeholder:text-[12px] px-2 py-1 w-full outline-none h-10 rounded-md bg-transparent border border-gray-300   "
      />
      <div className=" flex gap-4 w-full ">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="First_name" className="text-gray-600 text-[14px]">
            Address
          </label>
          <input
            type="text"
            name="Address"
            {...register("Address", {
              required: "Address is required",
              validate: (value) =>
                value.trim() !== "" || "Address cannot be empty",
            })}
            className="placeholder:text-red-400 placeholder:text-[12px] px-2 py-1 w-full outline-none h-10 rounded-md bg-transparent border border-gray-300   "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="First_name" className="text-gray-600 text-[14px]">
            Zipcode
          </label>
          <input
            type="text"
            name="Zipcode"
            {...register("Zipcode", {
              required: "Zipcode is required",
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
        {errors.Address && <p>* {errors.Address.message}</p>}
        {errors.Zipcode && <p>* {errors.Zipcode.message}</p>}
      </div>
    </section>
  );
};

export default Step1;
