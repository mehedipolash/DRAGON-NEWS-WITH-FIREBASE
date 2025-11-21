// DANGER: DO NOT SHARE PUBLIC
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import App from "../Firebase/firebase.config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUukfSIhUTag9Ly2uNE-6A-238XfjKWcY",
  authDomain: "dragon-news-breaking-41c10.firebaseapp.com",
  projectId: "dragon-news-breaking-41c10",
  storageBucket: "dragon-news-breaking-41c10.firebasestorage.app",
  messagingSenderId: "23010325108",
  appId: "1:23010325108:web:20c74b5dd0c8ffcc56d721"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;