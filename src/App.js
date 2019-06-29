import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Channel from "./Channel";
import { firebase } from "./firebase";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      user ? setUser(user) : setUser(null);
    });
  });
  const handelSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    setUser(result);
  };
  return user ? (
    <div className="App">
      <Nav />
      <Channel />
    </div>
  ) : (
    <div className="Login">
      <h1>OUR CHAT APP</h1>
      <button onClick={handelSignIn}> Sign in with Google </button>
    </div>
  );
}

export default App;
