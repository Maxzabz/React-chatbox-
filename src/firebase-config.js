import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBw3euwYze_TLYTXDErfizRBP0TEdSC2qY",
  authDomain: "dev2-57c30.firebaseapp.com",
  projectId: "dev2-57c30",
  storageBucket: "dev2-57c30.appspot.com",
  messagingSenderId: "524651842193",
  appId: "1:524651842193:web:d4c650f071385fc3ee4d30"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);