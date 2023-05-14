// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUo1UAL1N0jLXF7AjZSiiQnxYrD1JFYHg",
  authDomain: "coffeeshop-93f0e.firebaseapp.com",
  projectId: "coffeeshop-93f0e",
  storageBucket: "coffeeshop-93f0e.appspot.com",
  messagingSenderId: "369486927290",
  appId: "1:369486927290:web:b05b4da36ccaf88d5af983"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;