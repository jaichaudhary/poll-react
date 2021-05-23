import React from "react";
import "./RightSidebar.css";
import Avatar from "@material-ui/core/Avatar";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ForumIcon from "@material-ui/icons/Forum";
import SettingsIcon from "@material-ui/icons/Settings";
import Badge from "@material-ui/core/Badge";

function RightSidebar() {
  return (
    <div className="rightSidebar">
      <div className="rightSidebar__Item">
        <Badge
          color="primary"
          variant="dot"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Avatar src="./myProfilePic.jpeg" />
        </Badge>
      </div>
      <div className="rightSidebar__Item">
        <Badge
          color="primary"
          variant="dot"
          className="rightSidebar__Item_badge"
        >
          <NotificationsIcon className="rightSidebar__Item__icons" />
        </Badge>
      </div>
      <div className="rightSidebar__Item">
        <Badge
          color="primary"
          variant="dot"
          className="rightSidebar__Item_badge"
        >
          <ForumIcon className="rightSidebar__Item__icons" />
        </Badge>
      </div>
      <div className="rightSidebar__Item">
        <Badge
          color="secondary"
          variant="dot"
          className="rightSidebar__Item_badge"
        >
          <SettingsIcon className="rightSidebar__Item__icons" />
        </Badge>
      </div>
    </div>
  );
}

export default RightSidebar;
