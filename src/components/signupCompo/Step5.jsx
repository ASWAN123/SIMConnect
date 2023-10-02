import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContextData } from "../../ContextData";
import { Link, redirect, useLocation, useNavigate, useNavigation, useOutletContext } from "react-router-dom";
import firebase from 'firebase/compat/app' ;


const Step5 = ({ watch ,  userData  }) => {
  const { db , auth } = useContextData() ;
  let [showCongrats, setShowCongrats] = useState(false);
  const  location  = useLocation() ;
  let [loading, setLoading] = useState(true) ;
  const  path  = location.pathname ;
  let navigate = useNavigate() ;
  
  

  




  useEffect(() => {
    if( path === "/SIMConnect/signup"){
      let data = watch() ;
      let email = data.email ; 
      let password = data.password ; 
      const registerNewUser = async (email, password) => { 
        try { 
          const userCredential = await createUserWithEmailAndPassword( auth , email, password);
          const user = userCredential.user ;

          let  dataclone = {...data }
          delete dataclone.password
          let date  = new  Date()
          await db.collection('simconnect').doc(user.uid).set({...dataclone , messages:[{From:'Network' ,  subject:'Welcome' , description:'What are your initial impressions of our website? Is there anything specific that stands out to you, whether positive or constructive feedback?' }]  , signupdate:date.getFullYear() ,  id: user.uid })
          setLoading(false)
          setShowCongrats(true)
          return user;
        } catch (error) {
          navigate('/SIMConnect/error' ,  {state: error.message})
        }
      };
  
      registerNewUser(email, password)
      return
    }
    if (path === '/SIMConnect/account/neworder'){
      const addSubscription = async () => {
        let data = watch()
        let newsub = data.subscriptions[0]
        await db.collection('simconnect').doc(userData.id).update({   subscriptions:firebase.firestore.FieldValue.arrayUnion({...newsub ,  date:new Date() })}).then(() => {
          console.log('added')
        }).catch((error) => {
          navigate('/SIMConnect/error' ,  {state: error.message})
        })
        setLoading(false)
        setShowCongrats(true)
      }
      addSubscription()
    }


    

  } , [] );




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
               src="./images/animation_lmi4a4zk_small.gif"
              alt=""
            />
            <p className="text-[16px] text-black font-bold ">
              congratulations !
            </p>
            <p>You are all set , Well done</p>
            <Link to='/SIMConnect/account' className="px-8 py-2 cursor-pointer bg-green-500 text-white text-center rounded-md text-[16px]">
              Continue
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default Step5;
