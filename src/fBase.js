import firebase from 'firebase/app';
import "firebase/auth" ;
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCyP-zFFHVhj9_FwzTN5xFoLm9XE8xpgy8",
  authDomain: "kwitter-4dd4f.firebaseapp.com",
  projectId:"kwitter-4dd4f",
  storageBucket: "kwitter-4dd4f.appspot.com",
  messagingSenderId: "1083529558691",
  appId:  "1:1083529558691:web:15651e265a9dfcc45e1d16",
  };

firebase.initializeApp(firebaseConfig);
export const firebaseInstance= firebase;
export const authService = firebase.auth();

export const dbService= firebase.firestore();
export const storageService= firebase.storage();
