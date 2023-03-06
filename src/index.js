// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApBXXyqZWEe5-UuKpVmzFgKCFxWVCC0DI",
  authDomain: "test2-6c0ff.firebaseapp.com",
  projectId: "test2-6c0ff",
  storageBucket: "test2-6c0ff.appspot.com",
  messagingSenderId: "829981606886",
  appId: "1:829981606886:web:d4914cb7c8ac412a938c27",
  measurementId: "G-T70K6ZERK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)