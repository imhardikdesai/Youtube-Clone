import React, { useContext, useMemo } from "react";
import Yt from "../../db/Yt";
import Player from "../videoPlayer/Player";
import YTContext from "../../context/YTContext";
import "./Upnav.css";

const Upnav = () => {
  const { data } = useContext(YTContext);
  const memoData = useMemo(() => data, [data]);

  return (
    <>
      <div className="up-nav">
        <div className="cat-box bg-dark text-light">All</div>
        {Yt.map((item, i) => {
          return (
            <div key={`${item}-${i}`} className="cat-box">
              {item}
            </div>
          );
        })}

        <div className="video_gallery">
          {memoData?.map((item) => {
            return (
              <Player
                key={item.etag}
                imgSrc={item.snippet.thumbnails.high.url}
                title={item.snippet.title}
                channelName={item.snippet.channelTitle}
                avatar={item.channelAvatar}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Upnav;
