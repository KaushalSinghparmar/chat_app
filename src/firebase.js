// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBlMAHsp-8faaEM0NN1CtdESh_E9G48NYw",
  authDomain: "chat-app-aeba6.firebaseapp.com",
  projectId: "chat-app-aeba6",
  storageBucket: "chat-app-aeba6.appspot.com",
  messagingSenderId: "858011322943",
  appId: "1:858011322943:web:8e95595e09260a9ca2c68a",
  dataBaseURL: "https://chat-app-aeba6.firebaseio.com",
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
// initialize Authentication via gmail
const auth = getAuth(app);
// initalize database for storring profile and chat related info..
const db = getFirestore(app);
// initalize storage for saing images.
const storage = getStorage(app);

export { auth, db, storage };
