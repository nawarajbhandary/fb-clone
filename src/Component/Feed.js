import React from "react";
import FeedElement from "./FeedElement";
import "../Style/Feed.css";
import feed1 from "../Images/feedImg/feed1.jpg";
import feed2 from "../Images/feedImg/feed2.jpg";
import feed3 from "../Images/feedImg/feed3.jpg";

import {
  MdOutlinePublic,
  MdLock,
  MdSupervisedUserCircle,
} from "react-icons/md";

function Feed() {
  return (
    <div className="feed__container">
      <div className="feed__single">
        <FeedElement
          avatarsrc="https://avatars.githubusercontent.com/u/10565954?v=4"
          username="Ramesh Syangtan"
          visibilityIcon={<MdOutlinePublic />}
          time="48 m ."
          caption="Join CMAT at Shastra
          #BestAtBhaktapur"
          image={feed1}
        />
      </div>
      <div className="feed__single">
        <FeedElement
          avatarsrc="https://avatars.githubusercontent.com/u/58141213?s=400&u=90b72b0462c4f1371374c16042b1353ee63529ad&v=4"
          username="Nawaraj Bhandari"
          visibilityIcon={<MdLock />}
          time="2 h ."
          caption="SEE special Computer course !"
          image={feed2}
        />
      </div>
      <div className="feed__single">
        <FeedElement
          avatarsrc="https://scontent.fktm9-2.fna.fbcdn.net/v/t1.6435-9/172204944_4824527224246699_6918722293347789546_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JaljIsmRPYUAX9731KP&_nc_ht=scontent.fktm9-2.fna&oh=dbe6d352a49c3b676cdf732a4aa2ecc5&oe=619F1B3B"
          username="Routine of Nepal Banda"
          visibilityIcon={<MdSupervisedUserCircle />}
          time="32 m ."
          caption=" Urgent Help Needed ! - कोटेश्वरबाट बानेश्वरतर्फ जाने क्रममा राहदानी हराएको ऽ पाउनु हुनेले तुरुन्त देहाय बमोजिमकाे मोबाइलमा कल गरेर फिर्ता गरिदिनुहाेला !"
          image={feed3}
        />
      </div>
    </div>
  );
}

export default Feed;
