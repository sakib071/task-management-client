// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALwfzDLW2LF9sMBWkYcYGLtHL5zX7Qj2c",
    authDomain: "task-manager-fcb0e.firebaseapp.com",
    projectId: "task-manager-fcb0e",
    storageBucket: "task-manager-fcb0e.appspot.com",
    messagingSenderId: "282453560439",
    appId: "1:282453560439:web:516375953a3b4a6e7a0a72"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);