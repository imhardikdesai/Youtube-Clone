import React from "react";
import "./../Navbar/Navbar.css";

import { AiFillHome, AiOutlineHistory ,AiOutlineLike} from "react-icons/ai";
import { RiVideoLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";

const Slidebar = () => {
  return (
    <>
      <div className="side-nav">
        <div className="mini-box d-flex align-items-center">
          <div className="mini-icon font">
            <AiFillHome />
          </div>
          Home
        </div>
        <div className="mini-box d-flex align-items-center">
          <div className="mini-icon font">
            <RiVideoLine />
          </div>
          Shorts
        </div>
        <div className="mini-box d-flex align-items-center">
          <div className="mini-icon font">
            <MdOutlineSubscriptions />
          </div>
          Subscription
        </div>
        <hr />
        <div className="mini-box d-flex align-items-center">
          <div className="mini-icon font">
            <MdOutlineVideoLibrary />
          </div>
          Library
        </div>
        <div className="mini-box d-flex align-items-center">
          <div className="mini-icon font">
            <AiOutlineHistory />
          </div>
          History
        </div>
        <div className="mini-box d-flex align-items-center">
          <div className="mini-icon font">
            <MdOutlineWatchLater />
          </div>
          Watch later
        </div>
        <div className="mini-box d-flex align-items-center">
          <div className="mini-icon font">
            <AiOutlineLike />
          </div>
          Liked videos
        </div>
      </div>
    </>
  );
};

export default Slidebar;
