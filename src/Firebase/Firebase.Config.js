// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMcs8P4NGMjTNLdkw33R8IAyUtAtu0OcY",
  authDomain: "food-king-52cd3.firebaseapp.com",
  projectId: "food-king-52cd3",
  storageBucket: "food-king-52cd3.appspot.com",
  messagingSenderId: "216119300733",
  appId: "1:216119300733:web:f7db4fe44236ccada71714"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;