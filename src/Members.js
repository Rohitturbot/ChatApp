import React from "react";
import useCollection from "./utils/useCollection";

export default function Members({ channelId }) {
  const members = useCollection("user", "displayName", [
    `channel.${channelId}`,
    "==",
    true
  ]);
  return (
    <div className="Members">
      <div>
        {members.map(member => (
          <div className="Member" key={member.id}>
            <div className="MemberStatus onine" />
            {member.displayName}
          </div>
        ))}
        {/* <div className="Member">
          <div className="MemberStatus online" />
          cleverbot
        </div> */}
      </div>
    </div>
  );
}
