import React from 'react'

const Step1 = () => {
  return(
    <section className="mt-8 w-[40%] mx-auto flex flex-col gap-2 ">
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
  )
}

export default Step1
