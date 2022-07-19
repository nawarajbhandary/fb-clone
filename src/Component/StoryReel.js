import React from "react";
import StoryElement from "./StoryElement";
import "../Style/StoryReel.css";
import story1 from "../Images/storyImg/story1.jpg";
import story2 from "../Images/storyImg/story2.jpg";
import story3 from "../Images/storyImg/story3.jpg";
import story4 from "../Images/storyImg/story4.jpg";
import story5 from "../Images/storyImg/story5.jpg";
import story6 from "../Images/storyImg/story6.jpg";

function StoryReel() {
  return (
    <div className="story__container">
      <StoryElement
        src="https://avatars.githubusercontent.com/u/58141213"
        title="Nawaraj Bhandari"
        image={story1}
      />
      <StoryElement
        src="https://avatars.githubusercontent.com/u/10565954?v=4"
        title="Ramesh Syangtan"
        image={story2}
      />
      <StoryElement
        src="https://avatars.githubusercontent.com/u/51399823?v=4"
        title="Nabaraj Rai"
        image={story3}
      />
      <StoryElement
        src="https://avatars.githubusercontent.com/u/46812080?v=4"
        title="Srijana Paudel"
        image={story4}
      />
      <StoryElement
        src="https://avatars.githubusercontent.com/u/86789582?v=4"
        title="Sanam Tamang"
        image={story5}
      />
      <StoryElement
        src="https://avatars.githubusercontent.com/u/26732783?v=4"
        title="Tilak KC"
        image={story6}
      />
    </div>
  );
}

export default StoryReel;
