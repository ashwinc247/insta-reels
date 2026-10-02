
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfMsNlniKOre5-J4gfotsOeHF_T7KP6nE",
  authDomain: "insta-2d48e.firebaseapp.com",
  projectId: "insta-2d48e",
  storageBucket: "insta-2d48e.firebasestorage.app",
  messagingSenderId: "480024050216",
  appId: "1:480024050216:web:3c20a709b6f7b62dda131d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);