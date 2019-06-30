import React, { useEffect } from "react";
import ChannelInfo from "./ChannelInfo";
import Messages from "./Messages";
import ChatInputBox from "./ChatInputBox";
import Members from "./Members";
import { db } from "./firebase";

export default function Channel({ user, channelId }) {
  useEffect(() => {
    db.doc(`user/${user.uid}`).update({
      [`channel.${channelId}`]: true
    });
  }, [user.uid, channelId]);

  return (
    <div className="Channel">
      <div className="ChannelMain">
        <ChannelInfo channelId={channelId} />
        <Messages channelId={channelId} />
        <ChatInputBox user={user} channelId={channelId} />
      </div>
      <Members channelId={channelId} />
    </div>
  );
}
