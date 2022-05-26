// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw6LpSKbwI1m5S-5PmyeHlXDrPlwM-Tac",
  authDomain: "netlify-project-14970.firebaseapp.com",
  projectId: "netlify-project-14970",
  storageBucket: "netlify-project-14970.appspot.com",
  messagingSenderId: "991861877524",
  appId: "1:991861877524:web:1cfee03825df2655f2f001",
  measurementId: "G-RKVZW3B5X9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app); 