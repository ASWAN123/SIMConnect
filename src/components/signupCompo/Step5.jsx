import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContextData } from "../../ContextData";
import { Link } from "react-router-dom";

const Step5 = ({ watch }) => {
  const { db , auth } = useContextData();
  let [showCongrats, setShowCongrats] = useState(false);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    let data = watch() ;
    let email = data.email ; 
    let password = data.password ;
    const registerNewUser = async (email, password) => {
      try {
        const userCredential = await createUserWithEmailAndPassword( auth , email, password);
        const user = userCredential.user ;
        console.log('User registered:', user);
        let  dataclone = {...data }
        delete dataclone.password
        await db.collection('simconnect').doc(user.uid).set({...dataclone ,  id: user.uid })
        setLoading(false)
        setShowCongrats(true)
        return user;
      } catch (error) {
        console.error('Error registering user:', error);
        throw error;
      }
    };

    registerNewUser(email, password)

  }, []);

  return (
    <section className="w-[80%] min-h-[300px] mx-auto py-1  relative ">
      {loading && (
        <img
          src="./laoding gif.gif"
          className=" mix-blend-multiply absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 mx-auto"
          alt=""
        />
      )}
      {showCongrats && (
        <>
          <div className="w-[500px] h-[500px] absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Confetti width="500px" height="500px" />
          </div>
          <div className="flex flex-col gap-2 items-center justify-center z-20  ">
            <img
              className="w-[150px] mix-blend-multiply  "
              src="/animation_lmi4a4zk_small.gif"
              alt=""
            />
            <p className="text-[16px] text-black font-bold ">
              congratulations !
            </p>
            <p>You are all set , Well done</p>
            <Link to='/account' className="px-8 py-2 cursor-pointer bg-green-500 text-white text-center rounded-md text-[16px]">
              Continue
            </Link>
          </div>{" "}
        </>
      )}
    </section>
  );
};

export default Step5;
