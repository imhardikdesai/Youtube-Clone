import React, { useContext } from "react";
import { BiVideoPlus } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillMicFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import YTContext from "../../context/YTContext";

import "./Navbar.css";

const Navbar = () => {
  const { setQuery, fetchVideos } = useContext(YTContext);

  const setCurrentQuery = (e) => {
    setQuery(e.target.value);
  };
  const listner = (event) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      console.log("Enter key was pressed. Run your function.");
      event.preventDefault();
      fetchVideos();
    }
  };
  return (
    <>
      <nav>
        <div className="first">
          <div className="font ham">
            <RxHamburgerMenu />
          </div>
          <div className="yt_logo">
            <img
              id="yt_logo"
              src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
              alt=""
            />
          </div>
        </div>
        <div className="second">
          <div className="search_box">
            <input
              onChange={setCurrentQuery}
              type="text"
              placeholder="Search"
              className="mx-2"
              name="search"
              id="search"
              onKeyDown={listner}
            />
            <div className="font">
              <BiSearchAlt2 />
            </div>
          </div>
          <div className="voice_icon font mx-1">
            <BsFillMicFill />
          </div>
        </div>
        <div className="third">
          <div className="font add_video mx-1">
            <BiVideoPlus />
          </div>
          <div className="font notification mx-1">
            <IoIosNotificationsOutline />
          </div>
          <div className="profile mx-2">H</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
