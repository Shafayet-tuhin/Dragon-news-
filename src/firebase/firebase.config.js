// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


console.log("environment variables" , import.meta.env.VITE_apiKey)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_aapiKey,
  authDomain: import.meta.env.VITE_aauthDomain,
  projectId: import.meta.env.VITE_aprojectId,
  storageBucket: import.meta.env.VITE_astorageBucket,
  messagingSenderId: import.meta.env.VITE_amessagingSenderId,
  appId: import.meta.env.VITE_aappId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app) ;

export default auth ;