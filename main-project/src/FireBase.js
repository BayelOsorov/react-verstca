// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: "AIzaSyAc7n6NDHzk907xBOTUuGIsJZn7MlWAJU0",
    authDomain: "mainprogect.firebaseapp.com",
    projectId: "mainprogect",
    storageBucket: "mainprogect.appspot.com",
    messagingSenderId: "132576379281",
    appId: "1:132576379281:web:567b55fb7e8408a14e1a30",
    measurementId: "G-7SBXYST71J"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)