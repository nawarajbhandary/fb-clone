import React from "react";
import "../Style/HomePage.css";
import Header from "../Component/Header";
import SideBarRow from "../Component/SideBarRow.js";
import StoryReel from "../Component/StoryReel.js";

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <div className="home__body">
        <SideBarRow />
        <StoryReel />
      </div>
    </div>
  );
}

export default HomePage;
