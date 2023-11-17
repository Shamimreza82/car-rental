
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6x--yNI712R735brxjEfD7RDepN3r3Cw",
  authDomain: "car-rental-7cb71.firebaseapp.com",
  projectId: "car-rental-7cb71",
  storageBucket: "car-rental-7cb71.appspot.com",
  messagingSenderId: "129558993705",
  appId: "1:129558993705:web:354aed24811ccf636bb538"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth; 