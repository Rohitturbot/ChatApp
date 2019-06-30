import React from "react";
import useCollection from "./utils/useCollection";

export default function Members({ channelId }) {
  const members = useCollection("user", undefined, [
    `channel.${channelId}`,
    "==",
    true
  ]);
  return (
    <div className="Members">
      <div>
        {members.sort(sortByName).map(member => (
          <div className="Member" key={member.id}>
            <div
              className={`MemberStatus ${member.status && member.status.state}`}
            />
            {member.displayName}
          </div>
        ))}
      </div>
    </div>
  );
}

function sortByName(a, b) {
  return a.displayName > b.displayName
    ? 1
    : a.displayName < b.displayName
    ? -1
    : 0;
}
