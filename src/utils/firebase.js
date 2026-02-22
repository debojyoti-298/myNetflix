// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9XEtvQxaamj-zRYYF2Pte-u5hcsiw6z8",
  authDomain: "mynewnetflix.firebaseapp.com",
  projectId: "mynewnetflix",
  storageBucket: "mynewnetflix.firebasestorage.app",
  messagingSenderId: "1035314749123",
  appId: "1:1035314749123:web:bfb98a6cd11941a65d8c76",
  measurementId: "G-XJYWZYLW24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();