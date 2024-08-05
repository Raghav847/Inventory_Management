// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn92dPrBXi5aOdCrU6zbvVBG4r_LmitCA",
  authDomain: "inventory-management-e3ec5.firebaseapp.com",
  projectId: "inventory-management-e3ec5",
  storageBucket: "inventory-management-e3ec5.appspot.com",
  messagingSenderId: "999859036188",
  appId: "1:999859036188:web:66c5f761b3cf1c9532ffd9",
  measurementId: "G-M1Z6J6EZP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}