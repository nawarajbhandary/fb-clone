import React from "react";
import "../Style/HomePage.css";
import Header from "../Component/Header";
import SideBarRow from "../Component/SideBarRow.js";
import StoryReel from "../Component/StoryReel.js";

function HomePage() {
  return (
    <div className="home__body">
      <div className="home__header">
        <Header />
        <br />
      </div>
      <div className="home__sidebar">
        <SideBarRow />
      </div>
      <div className="home__storyreel">
        <StoryReel />
      </div>
    </div>
  );
}

export default HomePage;
