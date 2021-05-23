import React from "react";
import "./LeftSidebar.css";
import PollIcon from "@material-ui/icons/Poll";
import GroupIcon from "@material-ui/icons/Group";
import TimelineIcon from "@material-ui/icons/Timeline";
import InboxIcon from "@material-ui/icons/Inbox";
import NotesOutlinedIcon from "@material-ui/icons/NotesOutlined";

function LeftSidebar() {
  return (
    <div className="leftSidebar">
      <div className="leftSidebar__Item__top">
        <NotesOutlinedIcon />
        <p className="leftSidebar__Item__para">lorem</p>
      </div>
      <div className="leftSidebar__Item leftSidebar__Item__active">
        <PollIcon />
        <p className="leftSidebar__Item__para">Event</p>
      </div>
      <div className="leftSidebar__Item">
        <GroupIcon />
        <p className="leftSidebar__Item__para">Teams</p>
      </div>
      <div className="leftSidebar__Item">
        <TimelineIcon />
        <p className="leftSidebar__Item__para">Analytics</p>
      </div>
      <div className="leftSidebar__Item">
        <InboxIcon />
        <p className="leftSidebar__Item__para">Results</p>
      </div>
    </div>
  );
}

export default LeftSidebar;
