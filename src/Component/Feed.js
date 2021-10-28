import React from "react";
import FeedElement from "./FeedElement";
import "../Style/Feed.css";
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
          caption="Thanks, Upwork
          #toprated #upworksuccess"
          image="https://media-exp1.licdn.com/dms/image/C4E22AQGkAmmogTDJwQ/feedshare-shrink_800/0/1623984697507?e=1638403200&v=beta&t=wa-KVaciRyOCKMmh87Vp7z10eXiqeH5-XyDhsbj-94g"
        />
      </div>
      <div className="feed__single">
        <FeedElement
          avatarsrc="https://avatars.githubusercontent.com/u/58141213?s=400&u=90b72b0462c4f1371374c16042b1353ee63529ad&v=4"
          username="Nawaraj Bhandari"
          visibilityIcon={<MdLock />}
          time="2 h ."
          caption="Memories of PoonHill Trek !"
          image="https://scontent.fktm9-2.fna.fbcdn.net/v/t1.6435-9/201029135_319541179896376_8425959480503348425_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ukh_8lOSzE4AX9FdFAE&tn=FYN7DttBkK_wM3bo&_nc_ht=scontent.fktm9-2.fna&oh=f2596319ef69d7101143e2b0eeae1bf4&oe=619F8158"
        />
      </div>
      <div className="feed__single">
        <FeedElement
          avatarsrc="https://scontent.fktm9-2.fna.fbcdn.net/v/t1.6435-9/172204944_4824527224246699_6918722293347789546_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JaljIsmRPYUAX9731KP&_nc_ht=scontent.fktm9-2.fna&oh=dbe6d352a49c3b676cdf732a4aa2ecc5&oe=619F1B3B"
          username="Routine of Nepal Banda"
          visibilityIcon={<MdSupervisedUserCircle />}
          time="32 m ."
          caption=" Paras to Bharat Mani - मेरो या फन्नी फन्नी वाला हेरेको थिए रमाइलो लाग्यो !"
          image="https://scontent.fktm9-2.fna.fbcdn.net/v/t1.6435-9/248878051_5471753906190691_3763621852582223930_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=UhsJ7zW78cAAX_tzNpJ&_nc_oc=AQmCWlGFbLLG6nw3BdjXU6ms5ebTv8M_2VNFQHLkWmhgRM-RWwJqgjUQapxOZ_5_V_Y&_nc_ht=scontent.fktm9-2.fna&oh=32a37b8f4dac47fa537364af8c7ab824&oe=61A12B92"
        />
      </div>
    </div>
  );
}

export default Feed;
