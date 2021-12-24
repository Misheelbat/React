import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEjKrxmswyTIundT-X4iW4KZELHbZvxzE",
  authDomain: "cooking-recipe-site-ce78b.firebaseapp.com",
  projectId: "cooking-recipe-site-ce78b",
  storageBucket: "cooking-recipe-site-ce78b.appspot.com",
  messagingSenderId: "303368656614",
  appId: "1:303368656614:web:784940d331170509de8d27",
};
// init firebase

firebase.initializeApp(firebaseConfig);
//init services

const projectFirestore = firebase.firestore();

export { projectFirestore };
