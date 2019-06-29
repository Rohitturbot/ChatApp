import React from "react";

export default function ChannelInfo({ channelId }) {
  return (
    <div className="ChannelInfo">
      <div className="Topic">
        Topic:
        <input className="TopicInput" defaultValue="Awesome stuff" />
      </div>
      <div className="ChannelName">#{channelId}</div>
    </div>
  );
}
