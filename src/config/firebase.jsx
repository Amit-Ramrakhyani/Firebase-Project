import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC10xzJwUVrHFhpSOmhKChJqBKh7Z6Ll5k",
  authDomain: "fir-project-aba00.firebaseapp.com",
  projectId: "fir-project-aba00",
  storageBucket: "fir-project-aba00.appspot.com",
  messagingSenderId: "727445510933",
  appId: "1:727445510933:web:71d241b6afb11012e5671c",
  measurementId: "G-7D5F5EQ98T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
