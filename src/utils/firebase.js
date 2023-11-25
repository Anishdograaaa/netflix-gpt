// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { API_KEY } from "./constant";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "netflix-gpt-24505.firebaseapp.com",
  projectId: "netflix-gpt-24505",
  storageBucket: "netflix-gpt-24505.appspot.com",
  messagingSenderId: "760956661100",
  appId: "1:760956661100:web:8c34cc73bac00607789749",
  measurementId: "G-40NPD9MMZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();