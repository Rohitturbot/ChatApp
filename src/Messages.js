import React, { useEffect, useRef } from "react";
import useCollection from "./utils/useCollection";
import MessageWithAvatar from "./MessageWithAvatar";
const moment = require("moment");

export default function Messages({ channelId }) {
  const messages = useCollection(`channel/${channelId}/messages`, "createAt");

  function showShowAvatar(previous, message) {
    const firstMessage = !previous;
    if (firstMessage) {
      return true;
    }
    const notSameUser = message.user.id !== previous.user.id;
    if (notSameUser) {
      return true;
    }
    const hasBeenAWhile =
      message.createAt.seconds - previous.createAt.seconds > 60;
    return hasBeenAWhile;
  }

  function shouldShowDay(previous, message) {
    const firstMessage = !previous;
    if (firstMessage) {
      return true;
    }

    const sameDay = !moment(previous.createAt.seconds * 1000).isSame(
      message.createAt.seconds * 1000,
      "day"
    );
    return sameDay;
  }

  function ChatScroller(props) {
    const ref = useRef();
    const shouldScrollRef = useRef(true);
    useEffect(() => {
      if (shouldScrollRef.current) {
        const node = ref.current;
        node.scrollTop = node.scrollHeight;
      }
    });
    const handelScroll = () => {
      const node = ref.current;
      const { scrollTop, clientHeight, scrollHeight } = node;
      const atBottom = scrollHeight === clientHeight + scrollTop;
      console.log("at botton", atBottom);

      shouldScrollRef.current = atBottom;
    };
    return <div {...props} ref={ref} onScroll={handelScroll} />;
  }

  return (
    <ChatScroller className="Messages">
      <div className="EndOfMessages">That's every message!</div>

      {messages.map((message, index) => {
        const previous = messages[index - 1];
        const showDay = shouldShowDay(previous, message);
        const showAvatar = showShowAvatar(previous, message);
        return showAvatar ? (
          <MessageWithAvatar
            showDay={showDay}
            message={message}
            key={message.id}
          />
        ) : (
          <div key={message.id}>
            <div className="Message no-avatar">
              <div className="MessageContent">{message.text}</div>
            </div>
          </div>
        );
      })}
    </ChatScroller>
  );
}
