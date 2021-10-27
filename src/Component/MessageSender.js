import React from "react";
import { Avatar } from "@material-ui/core";
import "../Style/MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function MessageSender() {
  return (
    <div className="messagesender">
      <div className="messagesender__top">
        <Avatar
          src="https://avatars.githubusercontent.com/u/58141213?s=96&v=4"
          style={{ height: "60px", width: "60px" }}
        />
        <form>
          <input
            className="messagesender__input"
            placeholder="what's on your mind, Nawaraj ?"
          />
        </form>
      </div>
      <div className="messagesender__buttom">
        <div className="messagesender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messagesender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messagesender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Live Video</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
