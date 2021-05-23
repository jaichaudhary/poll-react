import React from "react";
import "./MidContent__Navbar.css";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SlideshowOutlinedIcon from "@material-ui/icons/SlideshowOutlined";

function MidContent__Navbar() {
  return (
    <div className="midContent__Navbar">
      <div className="midContent__Navbar__left">
        <ArrowBackIosOutlinedIcon className="midContent__Navbar__left__backIcon" />
        <div className="midContent__Navbar__left__text__part">
          <div className="midContent__Navbar__left__text">
            <h2>Webmobi-#40982 </h2>
            <button className="midContent__Navbar__left__text__part__btn">
              Expired
            </button>
          </div>
          <p className="midContent__Navbar__left__text__part__date">
            03 January,2021 - 10 January,2021
          </p>
        </div>
      </div>
      <div className="midContent__Navbar__right">
        <div className="midContent__Navbar__right__btn__container">
          <button className="midContent__Navbar__right__btn">
            <ShareOutlinedIcon fontSize="small" />
            <p className="midContent__Navbar__right__btn__text">Share</p>
          </button>
        </div>
        <div className="midContent__Navbar__right__btn__container">
          <button className="midContent__Navbar__right__btn midContent__Navbar__right__btn__color">
            <SlideshowOutlinedIcon fontSize="small" />
            <p className="midContent__Navbar__right__btn__text">Present</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MidContent__Navbar;
