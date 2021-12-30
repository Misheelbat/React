import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQ0g6Q5liua5APXDYEDogdJpo8QG8JgpM",
  authDomain: "manages-414b7.firebaseapp.com",
  projectId: "manages-414b7",
  storageBucket: "manages-414b7.appspot.com",
  messagingSenderId: "858106383634",
  appId: "1:858106383634:web:4e03f15dd6c5112dca37cb",
};

firebase.initializeApp(firebaseConfig);

const proFire = firebase.firestore();
const proAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { proFire, proAuth, timestamp };
