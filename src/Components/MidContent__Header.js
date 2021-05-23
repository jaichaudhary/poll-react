import React from "react";
import "./MidContent__Header.css";

function MidContent__Header() {
  return (
    <div className="midContent__Header">
      <div className="midContent__Header__btnDiv midContent__Header__btnDiv__active">
        Live Polls
      </div>
      <div className="midContent__Header__btnDiv">Audience Q&A</div>
      <div className="midContent__Header__btnDiv">Ideas</div>
      <div className="midContent__Header__btnDiv">Analytics</div>
    </div>
  );
}

export default MidContent__Header;
