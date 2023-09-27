import { createContext , useContext, useEffect, useState } from "react";
import {db  ,  auth } from './firebaseconfig'
const ContextData = createContext({})

export const Contextprovider = ( { children } ) => {
    const [ data ,  setData] = useState([])
    
    useEffect(() => {
        const unsubscribe = db.collection("simconnect").onSnapshot((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setData(data);
        });
    
        return () => {
          unsubscribe() ;
        } ;
      }, []);




    return <ContextData.Provider value ={{ db , data ,auth }} >{children}</ContextData.Provider>
}


export const  useContextData = () => useContext(ContextData)


