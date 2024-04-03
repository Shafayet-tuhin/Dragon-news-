// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwHNn6h4ZPELqGhcJxaLvVJsHbyDgNogQ",
  authDomain: "the-news-dragon-f3925.firebaseapp.com",
  projectId: "the-news-dragon-f3925",
  storageBucket: "the-news-dragon-f3925.appspot.com",
  messagingSenderId: "807982726970",
  appId: "1:807982726970:web:7f090d2ae4fab2c79c1a03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app) ;

export default auth ;