// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvOHp8VffAck65mkdIDjLybL5iFlqMxfM",
  authDomain: "login-page-f5246.firebaseapp.com",
  projectId: "login-page-f5246",
  storageBucket: "login-page-f5246.appspot.com",
  messagingSenderId: "819516306348",
  appId: "1:819516306348:web:f6f4345270c09545d2c009",
  measurementId: "G-C1MZ2P3ZEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);