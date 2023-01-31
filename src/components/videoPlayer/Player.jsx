import React from "react";
import "./player.css";

const Player = (props) => {
  return (
    <>
      <div className="video-box d-flex">
        <div className="thumbnail">
          <img src={props.imgSrc} alt="thumbnail" />
        </div>
        <div className="video-bottom d-flex">
          <div className="video-profile">
            <img
              src="https://yt3.ggpht.com/ytc/AL5GRJVjaz-2XOEEYWVYb5lpUHcujv-9CawSwuE4HnMMmg=s68-c-k-c0x00ffffff-no-rj"
              alt="profile"
            />
          </div>
          <div className="text-area">
            <div className="title">{props.title}</div>
            <div className="channel-name text-muted">{props.channelName}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
