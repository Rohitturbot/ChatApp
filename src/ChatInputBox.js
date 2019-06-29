import React from "react";
import { db } from "./firebase";

export default function ChatInputBox({ user }) {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        let value = event.target.elements[0].value;
        db.collection("channel/general/messages").add({
          user: db.collection("user").doc(user.uid),
          text: value,
          createAt: new Date()
        });
        event.target.reset();
      }}
      className="ChatInputBox"
    >
      <input className="ChatInput" placeholder="Message #general" />
    </form>
  );
}
