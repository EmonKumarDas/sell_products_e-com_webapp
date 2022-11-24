// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTf6D3cKDZNXOAvkKaNlextrPr_9xuZYk",
  authDomain: "sell-second-hand-phone.firebaseapp.com",
  projectId: "sell-second-hand-phone",
  storageBucket: "sell-second-hand-phone.appspot.com",
  messagingSenderId: "333497836678",
  appId: "1:333497836678:web:12d91219a9e01ab3299d07",
  measurementId: "G-NCZT332490"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
