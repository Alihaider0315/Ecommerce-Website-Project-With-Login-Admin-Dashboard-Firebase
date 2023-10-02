// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALJFqnUtPJDN94IIZArA1epZ-gV_O6gKo",
  authDomain: "firstproject-b206f.firebaseapp.com",
  projectId: "firstproject-b206f",
  storageBucket: "firstproject-b206f.appspot.com",
  messagingSenderId: "1018194885225",
  appId: "1:1018194885225:web:e1dcd608941e5c78a040f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}