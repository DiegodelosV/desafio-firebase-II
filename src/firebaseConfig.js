// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "desafio-firebase-ii-1c0d2.firebaseapp.com",
  projectId: "desafio-firebase-ii-1c0d2",
  storageBucket: "desafio-firebase-ii-1c0d2.appspot.com",
  messagingSenderId: "864804813679",
  appId: "1:864804813679:web:fe586c16e91cf2f0a9069a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app