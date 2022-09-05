// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/*
  apiKey: "AIzaSyBVKXboMftTJXimFnPExk0lWER7v492xm0",
  authDomain: "restaurant-d6de5.firebaseapp.com",
  projectId: "restaurant-d6de5",
  storageBucket: "restaurant-d6de5.appspot.com",
  messagingSenderId: "894143414061",
  appId: "1:894143414061:web:f06fa801ca79b0d43cdda4"
*/

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVKXboMftTJXimFnPExk0lWER7v492xm0",
  authDomain: "restaurant-d6de5.firebaseapp.com",
  projectId: "restaurant-d6de5",
  storageBucket: "restaurant-d6de5.appspot.com",
  messagingSenderId: "894143414061",
  appId: "1:894143414061:web:f06fa801ca79b0d43cdda4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);