// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCViJYb3NKGoPSaU0viXGT0qAV4YLfPzU0",
  authDomain: "authtest-check.firebaseapp.com",
  projectId: "authtest-check",
  storageBucket: "authtest-check.appspot.com",
  messagingSenderId: "413455116756",
  appId: "1:413455116756:web:212321518e00f5ea2fce41",
  measurementId: "G-PBB31DRQS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app)

console.log(auth)

export {auth,app, createUserWithEmailAndPassword, signInWithEmailAndPassword, analytics,firestore}