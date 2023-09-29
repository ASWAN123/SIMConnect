import React, { useState } from 'react'
import { useContextData } from '../../ContextData'
import { useLocation } from 'react-router-dom'

const Tofollow = ({ formstep, setFormstep }) => {
  const  location  = useLocation() ;
  const  path = location.pathname ;

    
  return (
    <section className="text-gray-500 py-2 flex  gap-4 text-[14px] items-center w-full justify-between px-8  capitalize">
    { path  !=="/account/neworder" && <><div className="w-full text-blue-500 flex flex-col items-center gap-2  justify-center text-center">
      <p className="">Personal information</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    </div>

    <hr className="w-full" /> </> }

    <div
      className={
        formstep >= 2
          ? "w-full flex flex-col items-center gap-2  text-blue-500 justify-center text-center"
          : "w-full flex flex-col items-center gap-2   justify-center text-center"
      }
    >
      <p>Subscription</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
        />
      </svg>
    </div>

    <hr className="w-full" />

    <div
      className={
        formstep >= 3
          ? "w-full flex flex-col items-center gap-2  text-blue-500 justify-center text-center"
          : "w-full flex flex-col items-center gap-2   justify-center text-center"
      }
    >
      <p>Pick a number</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    </div>
    <hr className="w-full" />

    <div
      className={
        formstep >= 4
          ? "w-full flex flex-col items-center gap-2  text-blue-500 justify-center text-center"
          : "w-full flex flex-col items-center gap-2   justify-center text-center"
      }
    >
      <p>payment</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
        />
      </svg>
    </div>

    <hr className="w-full" />

    <div
      className={
        formstep >= 5
          ? "w-full flex flex-col items-center gap-2  text-blue-500 justify-center text-center"
          : "w-full flex flex-col items-center gap-2   justify-center text-center"
      }
    >
      <p>Confirmation</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    </div>
  </section>
  )
}

export default Tofollow
