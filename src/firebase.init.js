// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9BqtSzDq57VyzW4oztfmgW-IydOCn6Es",
  authDomain: "ema-john-simple-435b0.firebaseapp.com",
  projectId: "ema-john-simple-435b0",
  storageBucket: "ema-john-simple-435b0.appspot.com",
  messagingSenderId: "430146330192",
  appId: "1:430146330192:web:dbd788785a59a74514bb55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
