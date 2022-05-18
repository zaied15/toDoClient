// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk4ZCv8BYHxsrcpZ_Fc2FD9lG4vZpzceA",
  authDomain: "email-password-auth-8fdf8.firebaseapp.com",
  projectId: "email-password-auth-8fdf8",
  storageBucket: "email-password-auth-8fdf8.appspot.com",
  messagingSenderId: "708174483817",
  appId: "1:708174483817:web:2ad713ead921375bebadf8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
