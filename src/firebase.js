// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "tutorialsept.firebaseapp.com",
    projectId: "tutorialsept",
    storageBucket: "tutorialsept.appspot.com",
    messagingSenderId: "155415869245",
    appId: "1:155415869245:web:ae27e36b08491ff90d3754"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);