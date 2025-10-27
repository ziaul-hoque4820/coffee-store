// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRVT7Wn-Q6Qs9RLieY2jBJE3gTCisj0IU",
  authDomain: "coffee-store-app-71aea.firebaseapp.com",
  projectId: "coffee-store-app-71aea",
  storageBucket: "coffee-store-app-71aea.firebasestorage.app",
  messagingSenderId: "851869554983",
  appId: "1:851869554983:web:05393188cfb2422da1b102"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);