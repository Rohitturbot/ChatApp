import React from "react";
import useCollection from "./utils/useCollection";
import { firebase } from "./firebase";
import { Link } from "@reach/router";

function Nav({ user }) {
  const channels = useCollection("channel");
  return (
    <div className="Nav">
      <div className="User">
        <img className="UserImage" alt={user.displayName} src={user.picture} />
        <div>
          <div>{user.displayName}</div>
          <div>
            <button
              onClick={() => {
                firebase.auth().signOut();
              }}
              className="text-button"
            >
              log out
            </button>
          </div>
        </div>
      </div>
      <nav className="ChannelNav">
        {channels.map(channel => (
          <Link to={`/channel/${channel.id}`} key={channel.id}>
            # {channel.id}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Nav;
