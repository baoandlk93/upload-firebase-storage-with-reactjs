import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCnKIRfTqNKGrc_lzVgPqwUjG7Tc-QwjXo",
    authDomain: "fir-reactjs-105e8.firebaseapp.com",
    projectId: "fir-reactjs-105e8",
    storageBucket: "fir-reactjs-105e8.appspot.com",
    messagingSenderId: "381415472195",
    appId: "1:381415472195:web:c86228045765e67da368f6",
    measurementId: "G-HVJJ127224"
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;


