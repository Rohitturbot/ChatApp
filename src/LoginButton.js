import React, { useState } from "react";
import { firebase } from "./firebase";

export default function LoginButton() {
  const [authError, setAuthError] = useState(null);

  const handelSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      setAuthError(error);
    }
  };

  return (
    <div className="Login">
      <h1>OUR CHAT APP</h1>
      <button onClick={handelSignIn}> Sign in with Google </button>
      {authError && (
        <div>
          <p> Hey Sorry, We got some problem in your SignIn</p>
          <p>
            <i>{authError.message}</i>
          </p>
          <p> please try to sign in again</p>
        </div>
      )}
    </div>
  );
}
