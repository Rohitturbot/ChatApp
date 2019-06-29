import React from "react";
import ChannelInfo from "./ChannelInfo";
import Messages from "./Messages";
import ChatInputBox from "./ChatInputBox";
import Members from "./Members";

export default function Channel() {
  return (
    <div className="Channel">
      <div className="ChannelMain">
        <ChannelInfo />
        <Messages />
        <ChatInputBox />
      </div>
      <Members />
    </div>
  );
}