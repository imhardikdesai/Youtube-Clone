import React, { useContext, useEffect, useState } from "react";
import { BiVideoPlus } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillMicFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCircleHalf } from "react-icons/bs";
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

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const light = "./yt-light.png";
  const dark = "yt-dark.png";
  const [logo, setLogo] = useState(light);

  const toggleCheck = () => {
    logo === dark ? setLogo(light) : setLogo(dark);
  };

  //const checkbox = logo ? light : dark;

  return (
    <>
      <nav className="nav">
        <div className="first">
          <div className="font ham">
            <RxHamburgerMenu />
          </div>
          <div className="yt_logo">
            <img id="yt_logo" src={logo} alt="" />
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
          <div
            className="font mx-1"
            onClick={() => {
              toggleTheme();
              toggleCheck();
            }}
          >
            <BsCircleHalf />
          </div>
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
