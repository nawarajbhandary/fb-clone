import React from "react";
import { Avatar } from "@material-ui/core";
import "../Style/SideBarRowComponent.css";

function SideBarRowComponent({ src, Icon, title }) {
  return (
    <div className="sidebar__row">
      {src && <Avatar src={src} />}
      {Icon}
      <h4>{title}</h4>
    </div>
  );
}

export default SideBarRowComponent;
