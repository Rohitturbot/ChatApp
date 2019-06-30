import React from "react";
import useDocWithCache from "../src/utils/useDocWithCache";
const moment = require("moment");

export default function MessageWithAvatar({ message, showDay }) {
  const author = useDocWithCache(message.user.path);

  return (
    <div key={message.id}>
      {showDay && (
        <div className="Day">
          <div className="DayLine" />
          <div className="DayText">29/06/2019</div>
          <div className="DayLine" />
        </div>
      )}
      <div className="Message with-avatar">
        <div
          className="Avatar"
          style={{
            background: author ? `url(${author.picture})` : ""
          }}
        />
        <div className="Author">
          <div>
            <span className="UserName"> {author && author.displayName}</span>{" "}
            <span className="TimeStamp">
              {moment(message.createAt.seconds * 1000).format("h:mm A")}
            </span>
          </div>
          <div className="MessageContent">{message.text}</div>
        </div>
      </div>
    </div>
  );
}
