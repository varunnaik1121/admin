// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWgHYBRMUjMDCkVj9EkfOixBF57ptbN6E",
  authDomain: "hireme-d514e.firebaseapp.com",
  projectId: "hireme-d514e",
  storageBucket: "hireme-d514e.appspot.com",
  messagingSenderId: "177751204100",
  appId: "1:177751204100:web:a7b25819f7a0810da47051",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



