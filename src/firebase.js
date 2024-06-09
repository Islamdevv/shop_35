// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr5Gkk5FxxqwT_8CQYdYcTzvO8uni6cdE",
  authDomain: "shop-951c6.firebaseapp.com",
  projectId: "shop-951c6",
  storageBucket: "shop-951c6.appspot.com",
  messagingSenderId: "911161061826",
  appId: "1:911161061826:web:e949a5afe58fa29236e65b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
export const auth = getAuth(app);

export default app;
