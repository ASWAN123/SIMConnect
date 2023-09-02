import { createContext , useContext } from "react";
import {db  ,  auth} from './firebaseconfig'
const ContextData = createContext({})

export const Contextprovider = ( { children } ) => {
    return <ContextData.Provider value ={{ db ,auth }} >{children}</ContextData.Provider>
}


export const  useContextData = () => useContext(ContextData)


