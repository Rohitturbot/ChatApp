import React from "react";
import useCollection from "./utils/useCollection";
import MessageWithAvatar from "./MessageWithAvatar";

export default function Messages({ channelId }) {
  const messages = useCollection(`channel/${channelId}/messages`, "createAt");
  return (
    <div className="Messages">
      <div className="EndOfMessages">That's every message!</div>

      {messages.map((message, index) => {
        const previous = messages[index - 1];
        const showDay = false;
        const showAvatar = !previous || message.user.id !== previous.user.id;
        return showAvatar ? (
          <MessageWithAvatar showDay={showDay} message={message} />
        ) : (
          <div key={message.id}>
            <div className="Message no-avatar">
              <div className="MessageContent">{message.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
