// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX3R8rhFy0FYmvDXrKbNXMeSvgmXMnmjA",
  authDomain: "test-firebase-92c37.firebaseapp.com",
  projectId: "test-firebase-92c37",
  storageBucket: "test-firebase-92c37.appspot.com",
  messagingSenderId: "299185548272",
  appId: "1:299185548272:web:8441e587a9f6fd7bf48b35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;