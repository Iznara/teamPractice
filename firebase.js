// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0YZRbzOMWAkrwgj69ayUUyEmf7j_JVVw",
  authDomain: "fir-auth-8ab9a.firebaseapp.com",
  projectId: "fir-auth-8ab9a",
  storageBucket: "fir-auth-8ab9a.appspot.com",
  messagingSenderId: "980094478323",
  appId: "1:980094478323:web:04b6f615c9982714395486"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app()
// }

// const auth = firebase.auth()

// export { auth };
