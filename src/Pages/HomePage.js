import React from "react";
import "../Style/HomePage.css";
import Header from "../Component/Header";
import SideBarRow from "../Component/SideBarRow.js";
import StoryReel from "../Component/StoryReel.js";
import MessageSender from "../Component/MessageSender";

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <div className="home__body">
        <SideBarRow />
        <div className="home__sender">
          <StoryReel />
          <div className="home__postfeed">
            <MessageSender />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
