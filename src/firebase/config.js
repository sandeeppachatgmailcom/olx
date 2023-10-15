import { initializeApp } from 'firebase/app';
import * as firebaseAuth from "firebase/auth";
import * as firestore from "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID,

  apiKey: "AIzaSyBYUi06YFLcB7hlnDVYT6ZhL19xuFuJ-C4",
  authDomain: "olx-clone-fad34.firebaseapp.com",
  projectId: "olx-clone-fad34",
  storageBucket: "olx-clone-fad34.appspot.com",
  messagingSenderId: "696478737852",
  appId: "1:696478737852:web:dcc7807f6339543ebef7b9",
  measurementId: "G-M59HNR3ZYM"
};



const app = initializeApp(firebaseConfig);
const db = firestore.getFirestore();

const firebaseExports = { app, db, firebaseAuth, firestore };
export default firebaseExports;