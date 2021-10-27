import React from "react";
import { Avatar } from "@material-ui/core";
import "../Style/StoryReel.css";

function StoryElement({ image, src, title }) {
  return (
    //backgroundImage: `url(${image})`
    //  This commmand helps to change the background as per url from props
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story__profile" src={src} />
      <h4>{title}</h4>
    </div>
  );
}

export default StoryElement;
