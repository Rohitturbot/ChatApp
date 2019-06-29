import React from "react";
import useCollection from "./utils/useCollection";

function Nav() {
  const channels = useCollection("channel");
  return (
    <div className="Nav">
      <div className="User">
        <img
          className="UserImage"
          alt="whatever"
          src="https://placekitten.com/64/64"
        />
        <div>
          <div>Rohit Yadav</div>
          <div>
            <button className="text-button">log out</button>
          </div>
        </div>
      </div>
      <nav className="ChannelNav">
        {channels.map(channel => (
          <a href={`/channel/${channel.id}`} key={channel.id}>
            # {channel.id}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Nav;
