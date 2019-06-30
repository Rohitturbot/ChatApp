import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Channel from "./Channel";
import { db, firebase, setupPresence } from "./firebase";
import LoginButton from "./LoginButton";
import { Router, Redirect } from "@reach/router";

function useAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    return firebase.auth().onAuthStateChanged(fuser => {
      if (fuser) {
        let user = {
          displayName: fuser.displayName,
          picture: fuser.photoURL,
          uid: fuser.uid
        };
        setUser(user);
        setupPresence(user);
        db.collection("user")
          .doc(user.uid)
          .set(user, { merge: true });
      } else {
        setUser(null);
      }
    });
  }, []);
  return user;
}

function App() {
  const user = useAuth();

  return user ? (
    <div className="App">
      <Nav user={user} />
      <Router>
        <Channel path="channel/:channelId" user={user} />
        <Redirect from="/" to="channel/general" />
      </Router>
    </div>
  ) : (
    <LoginButton />
  );
}

export default App;
