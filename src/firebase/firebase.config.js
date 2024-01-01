// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAd0uKJhRrIWQUqXtHN1aFX801TKoBMdCQ",
    authDomain: "task-manager-fd513.firebaseapp.com",
    projectId: "task-manager-fd513",
    storageBucket: "task-manager-fd513.appspot.com",
    messagingSenderId: "975617196844",
    appId: "1:975617196844:web:a7f9985452f1972e106289"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);