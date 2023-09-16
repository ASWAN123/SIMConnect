import React from 'react'

const Step1 = ({ register ,  errors , getValues }) => {

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
            name='first_name'
            placeholder={ errors.first_name && errors.first_name.message }
            {...register('first_name' , {required:{ value:true ,  message:'Please type your first name'}})}
            
            className=" placeholder:text-red-400 placeholder:text-[12px] text-[14px] px-2 py-1 w-full outline-none h-10 rounded-md bg-transparent border border-gray-300   "
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
            name='last_name'
            placeholder={ errors.last_name && errors.last_name.message }
            {...register('last_name' ,{required:{ value:true ,  message:'Please type your last name'}})}
            className="placeholder:text-red-400 placeholder:text-[12px] px-2 py-1 w-full outline-none h-10 rounded-md bg-transparent border border-gray-300   "
          
          />
        </div>
      </div>
      <label htmlFor="First_name" className="text-gray-600 text-[14px]">
        Email
      </label>
      <input
        type="text"
        name='email'
        placeholder={ errors.email && errors.email.message }
        {...register('email' ,{required:{ value:true ,  message:'Please type your email'}})}
        className="placeholder:text-red-400 placeholder:text-[12px] px-2 py-1 w-full outline-none h-10 rounded-md bg-transparent border border-gray-300   "
      />
      <label htmlFor="First_name" className="text-gray-600 text-[14px]">
        {" "}
        Password
      </label>
      <input
        type="text"
        name='password'
        placeholder={ errors.password && errors.password.message }
        {...register('password' , {required:{ value:true ,  message:'Please type your password'}})}
        className="placeholder:text-red-400 placeholder:text-[12px] px-2 py-1 w-full outline-none h-10 rounded-md bg-transparent border border-gray-300   "
      />
    </section>
  )
}

export default Step1
