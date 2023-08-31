import { initializeApp } from "firebase/app" ;
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAOgYpC5TrdHwjKCIf8eeNbIVl2MWSFHn8",
  authDomain: "simconnect-c4ab8.firebaseapp.com",
  projectId: "simconnect-c4ab8",
  storageBucket: "simconnect-c4ab8.appspot.com",
  messagingSenderId: "458763201774",
  appId: "1:458763201774:web:04e94a4e11d431110197ff"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig) ;

export const db = firebase.firestore();
const myapp = initializeApp(firebaseConfig)
const  auth = getAuth(myapp)
export {auth}

