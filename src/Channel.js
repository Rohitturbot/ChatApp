import React from "react";
import ChannelInfo from "./ChannelInfo";
import Messages from "./Messages";
import ChatInputBox from "./ChatInputBox";
import Members from "./Members";

export default function Channel({ user }) {
  return (
    <div className="Channel">
      <div className="ChannelMain">
        <ChannelInfo />
        <Messages />
        <ChatInputBox user={user} />
      </div>
      <Members />
    </div>
  );
}
