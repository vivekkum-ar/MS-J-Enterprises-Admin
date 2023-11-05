// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGa6RIZVE5sP7yo_rvQucRNKfUbKXey-8",
  authDomain: "ms-jaya-enterprises.firebaseapp.com",
  projectId: "ms-jaya-enterprises",
  storageBucket: "ms-jaya-enterprises.appspot.com",
  messagingSenderId: "672822795885",
  appId: "1:672822795885:web:537b82f3a4de9aaa7aa964",
  measurementId: "G-Z7ZQ65ZY4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };