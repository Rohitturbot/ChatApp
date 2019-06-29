import React from "react";
import { db } from "./firebase";

export default function ChatInputBox() {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        let value = event.target.elements[0].value;
        db.collection("channel/general/messages").add({
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
