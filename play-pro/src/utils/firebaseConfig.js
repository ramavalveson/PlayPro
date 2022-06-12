// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGVgP5yP-pat_R8SUV3s_LzGg6B-85ZtQ",
    authDomain: "ecommerce-playpro.firebaseapp.com",
    projectId: "ecommerce-playpro",
    storageBucket: "ecommerce-playpro.appspot.com",
    messagingSenderId: "818473662000",
    appId: "1:818473662000:web:86ef7c0ad337f40c729ff5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db