import React, { useContext } from "react";
import Yt from "../../db/Yt";
import Player from "../videoPlayer/Player";
import YTContext from "../../context/YTContext";
const Upnav = () => {
  const { data } = useContext(YTContext);

  return (
    <>
      <div className="up-nav">
        <div className="cat-box bg-dark text-light">All</div>
        {Yt.map((item) => {
          return (
            <div key={item} className="cat-box">
              {item}
            </div>
          );
        })}

        <div className="video_gallery">
          {data.map((item) => {
            return (
              <Player
                key={item}
                imgSrc={item.snippet.thumbnails.high.url}
                title={item.snippet.title}
                channelName={item.snippet.channelTitle}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Upnav;
