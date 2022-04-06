// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUjqnFbrd9PVHk4gUqiOjx4Wz8oIzXChA",
  authDomain: "simple-firebase-auth-fb7c2.firebaseapp.com",
  projectId: "simple-firebase-auth-fb7c2",
  storageBucket: "simple-firebase-auth-fb7c2.appspot.com",
  messagingSenderId: "395291508876",
  appId: "1:395291508876:web:8e3bd7a5f4e7b7c739fba9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;