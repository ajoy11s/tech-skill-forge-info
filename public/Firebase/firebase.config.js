// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzRQAIkC5U7nB7ggcaniKC8wu6ZoqQ8nc",
  authDomain: "tech-skill-auth-log-firebase.firebaseapp.com",
  projectId: "tech-skill-auth-log-firebase",
  storageBucket: "tech-skill-auth-log-firebase.appspot.com",
  messagingSenderId: "105707367717",
  appId: "1:105707367717:web:6c8b4026bc1ea1432ffecc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;