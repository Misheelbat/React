import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9-vHBZzDONLNs_gQl3WwyJePM1BcGpws",
  authDomain: "mymoney-45a52.firebaseapp.com",
  projectId: "mymoney-45a52",
  storageBucket: "mymoney-45a52.appspot.com",
  messagingSenderId: "52094160050",
  appId: "1:52094160050:web:aedaec3f325397b1980dab",
};

// init firebase
firebase.initializeApp(firebaseConfig);

//init service
const proFire = firebase.firestore();
const proAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { proFire, proAuth, timestamp };
