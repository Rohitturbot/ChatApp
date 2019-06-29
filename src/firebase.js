import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBgb5xpNRKIfAhI1L3PHF-RI8gfuXmGU70",
  authDomain: "chat-app-d8e91.firebaseapp.com",
  databaseURL: "https://chat-app-d8e91.firebaseio.com",
  projectId: "chat-app-d8e91",
  storageBucket: "chat-app-d8e91.appspot.com",
  messagingSenderId: "697216982746",
  appId: "1:697216982746:web:12c3307a418b347f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db, firebase };
