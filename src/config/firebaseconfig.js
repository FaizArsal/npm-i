// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpMRaazMHtv5HFwPFCyTwAeoOfj67wtjI",
  authDomain: "transportationapp-50110.firebaseapp.com",
  projectId: "transportationapp-50110",
  storageBucket: "transportationapp-50110.appspot.com",
  messagingSenderId: "813334018811",
  appId: "1:813334018811:web:97147e290748b51b6b4e5e",
  measurementId: "G-9CDKBX3Q2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
