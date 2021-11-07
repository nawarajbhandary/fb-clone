import React from "react";
import "../Style/HomePage.css";
import Header from "../Component/Header";
import SideBarRow from "../Component/SideBarRow.js";
import StoryReel from "../Component/StoryReel.js";
import MessageSender from "../Component/MessageSender";
import Feed from "../Component/Feed";
import RightMostElement from "../Component/RightMostElement";

function HomePage() {
  return (
    <div className="homepage">
      <div className="home__header">
        <Header />
      </div>
      <div className="home__body">
        <div className="home__sidebar">
          <SideBarRow />
        </div>
        <div className="home__middle">
          <StoryReel />
          <div className="home__postfeed">
            <MessageSender />
          </div>
          <div className="home__feed">
            <Feed />
          </div>
        </div>
        <div className="home__right">
          <RightMostElement />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
