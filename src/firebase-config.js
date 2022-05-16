import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "andres-hoeflich.firebaseapp.com",
  projectId: "andres-hoeflich",
  storageBucket: "andres-hoeflich.appspot.com",
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);