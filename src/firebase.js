// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA_to4MqIiRr9FJDsRb6ZoYH5scb9hajs",
  authDomain: "fir-auth-9f963.firebaseapp.com",
  projectId: "fir-auth-9f963",
  storageBucket: "fir-auth-9f963.appspot.com",
  messagingSenderId: "389197571951",
  appId: "1:389197571951:web:84d2a4c3ffdbd21ccb6a9a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
