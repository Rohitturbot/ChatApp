import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Channel from "./Channel";
import { firebase } from "./firebase";
import LoginButton from "./LoginButton";

function useAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    return firebase.auth().onAuthStateChanged(user => {
      user
        ? setUser({
            displayName: user.displayName,
            picture: user.photoURL,
            uid: user.uid
          })
        : setUser(null);
    });
  }, []);
  return user;
}
function App() {
  const user = useAuth();

  return user ? (
    <div className="App">
      <Nav user={user} />
      <Channel />
    </div>
  ) : (
    <LoginButton />
  );
}

export default App;
