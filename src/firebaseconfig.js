import { initializeApp } from "firebase/app" ;
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey:process.env.REACT_APP_A ,
  authDomain:process.env.REACT_APP_B ,
  projectId: process.env.REACT_APP_C,
  storageBucket:process.env.REACT_APP_D ,
  messagingSenderId:process.env.REACT_APP_E ,
  appId: process.env.REACT_APP_F
  };

// Initialize Firebase

firebase.initializeApp(firebaseConfig) ;

export const db = firebase.firestore();
const myapp = initializeApp(firebaseConfig) ;
export const  auth = getAuth(myapp) ;


