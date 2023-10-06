import React from "react";
import "./player.css";

const Player = (props) => {
  return (
    <>
      <div className="video-box d-flex justify-content-center player-color">
        <div className="thumbnail">
          <img src={props.imgSrc} alt="thumbnail" />
        </div>
        <div className="video-bottom d-flex">
          <div className="video-profile">
            <img src={props.avatar} alt="profile" />
          </div>
          <div className="text-area">
            <div className="title">{props.title}</div>
            <div className="channel-name">{props.channelName}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
