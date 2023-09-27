import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import { useForm, SubmitHandler } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContextData } from "../ContextData";
import  { AiOutlineEye  ,  AiOutlineEyeInvisible } from 'react-icons/ai'


function Login() {
  const { db, auth } = useContextData();
  let navigate = useNavigate()
  const [showpassword, setShowpassword] = useState(false);
  const {
    watch,
    register,
    handleSubmit ,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    criteriaMode: "all",
  });


  const onSubmit = async () => {
    let  email = watch().email
    let password = watch().password
    console.log(email ,  password)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      navigate('/account')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    //   setError(errorMessage)
    });
  }

  

  return (
    <div className="min-w-[350px] max-w-[350px] mt-12  mx-auto ">
      <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-2">
        <p className="text-center text-[20px] mb-4 text-black">
          Log Into Your Account
        </p>
        

        <input
          className=" w-full placeholder:text-[14] placeholder:text-gray-400 outline-none bg-transparent px-2 py-1 h-10 border rounded-sm"
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
        />
        
        <input
          className=" w-full placeholder:text-[14] placeholder:text-gray-400 outline-none bg-transparent px-2 py-1 h-10 border rounded-sm"
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
          type={ showpassword ? 'text' : 'password' }
        />

<button type="button" className="ml-auto mb-[-5px] ">
        {
         !showpassword && <AiOutlineEye className="cursor-pointer" color="lightgray" size={18}   onClick={() => {setShowpassword(!showpassword)}} />
        }
        {
         showpassword && <AiOutlineEyeInvisible className="cursor-pointer" color="lightgray" size={18}  onClick={() => {setShowpassword(!showpassword)}}/>
        }
        </button>
        <input
          className="hover:bg-[#000435]/40 bg-[#000435] text-white px-6 py-2 rounded-sm mt-2 hover:cursor-pointer "
          type="submit"
          value="Log in"
        />
        {errors.email && <p className="text-[12px] text-red-400">* {errors.email.message}</p>}
        {errors.password && <p className="text-[12px] text-red-400">* {errors.password.message}</p>}
      </form>

      <div className="flex flex-col gap-2 items-start mt-4 text-[14px]">
        <p>forget password ?</p>
        <div className="flex gap-1 items-center">
          <p>Don't have an account ? </p>
          <Link to="/Signup" className="text-blue-800 py-1 rounded-sm ">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
