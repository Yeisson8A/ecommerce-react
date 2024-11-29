import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCskgkaevcWLP-GEAu6jZMmCtaSaxiHz0M",
  authDomain: "ecommerce-react-44658.firebaseapp.com",
  projectId: "ecommerce-react-44658",
  storageBucket: "ecommerce-react-44658.firebasestorage.app",
  messagingSenderId: "445692251482",
  appId: "1:445692251482:web:2a37c7fdf7352f638e7763"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);