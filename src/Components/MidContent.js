import React from "react";
import "./MidContent.css";
import MidContent__Navbar from "./MidContent__Navbar.js";
import MidContent__Header from "./MidContent__Header.js";
import MidContent__Poll from "./MidContent__Poll.js";

function MidContent() {
  return (
    <div className="midContent">
      <MidContent__Navbar />
      <MidContent__Header />
      <MidContent__Poll />
    </div>
  );
}

export default MidContent;
