import firebase from "firebase/app";
import "firebase/database";
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
const rtdb = firebase.database();

export function setupPresence(user) {
  const isOfflineforRTDB = {
    state: "offline",
    lastChanged: firebase.database.ServerValue.TIMESTAMP
  };
  const isOnlineforRTDB = {
    state: "online",
    lastChanged: firebase.database.ServerValue.TIMESTAMP
  };
  const isOfflineforFireStore = {
    state: "offline",
    lastChanged: firebase.firestore.FieldValue.serverTimestamp()
  };
  const isOnlineforFireStore = {
    state: "online",
    lastChanged: firebase.firestore.FieldValue.serverTimestamp()
  };

  const rtdbRef = rtdb.ref(`/status/${user.uid}`);
  const userDoc = db.doc(`/user/${user.uid}`);

  rtdb.ref(".info/connected").on("value", async snapshot => {
    if (snapshot.val() === false) {
      userDoc.update({
        status: isOfflineforFireStore
      });
      return;
    }
    await rtdbRef.onDisconnect().set(isOfflineforRTDB);
    userDoc.update({
      status: isOnlineforFireStore
    });
    rtdbRef.set(isOnlineforRTDB);
  });
}
export { db, firebase };
