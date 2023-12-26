// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: `AIzaSyB1H9VKQeSFaTZsyOzQ_3sA69Nhr_APTNs`,
  authDomain: "brand-ec00c.firebaseapp.com",
  projectId: "brand-ec00c",
  storageBucket: "brand-ec00c.appspot.com",
  messagingSenderId: "422757897290",
  appId: "1:422757897290:web:56f5009c210f41e3fe42b3",
  measurementId: "G-E1H2GRRZZ9"
};
firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const db = getFirestore(app);
export default db;
export const storage = getStorage(app)



