import React from "react";
/* import { FaBirthdayCake } from "react-icons/fa"; */
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { AiOutlineNotification } from "react-icons/ai";
import "../Style/RightMostElement.css";
import { Avatar } from "@material-ui/core";
import CakeIcon from "@material-ui/icons/Cake";
import CloseIcon from "@material-ui/icons/Close";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";

function BirthdayPost() {
  return (
    <div className="birthday">
      <div className="birthday__top">
        <div className="birthday__top__left">
          <CakeIcon style={{ color: "#FFBD35" }} /> <h5>Birthday</h5>
        </div>
        <div className="birthday__top__right">
          <CloseIcon />
        </div>
      </div>
      <div className="birthday__bottom">
        <h4>
          {" "}
          Dadhip Bhattarai, सुजता अधिकारी and 5 others have birthday today.
        </h4>
      </div>
      <hr />
    </div>
  );
}
function YourPages() {
  return (
    <div className="page__container">
      <div className="page__header">
        <h3 className="yourpage_h3">Your Pages</h3>
        <BsThreeDots style={{ marginLeft: "138px", fontSize: "20px" }} />
      </div>
      <div className="page__body">
        <div className="page__body__top">
          <Avatar
            style={{ height: "30px", width: "30px" }}
            src="https://scontent.fktm9-2.fna.fbcdn.net/v/t1.18169-9/399668_304426803020599_825194166_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Yl2RH9cGDdUAX_usmx_&_nc_ht=scontent.fktm9-2.fna&oh=c8cd5568e2de68cc49a0a8849252f374&oe=61AB25EA"
          />
          <h4 className="page__body-h4">Nepali Cricket Fan Page</h4>
        </div>
        <div className="page__body__middle">
          <MdOutlineNotificationsActive
            style={{ height: "25px", width: "25px", color: "gray" }}
          />
          <p className="page__body__middle-h4">12 Notifications </p>
        </div>
        <div className="page__body__middle">
          <AiOutlineNotification
            style={{ height: "25px", width: "25px", color: "gray" }}
          />
          <p className="page__body__middle-h4">Create Promotion</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
function Contacts() {
  return (
    <div className="contact__container">
      <div className="contact__header">
        <div className="contact__header__left">
          <h3>Contacts</h3>
        </div>
        <div className="contact__header__right">
          <VideoCallIcon style={{ marginLeft: "3px" }} />
          <SearchIcon style={{ marginLeft: "5px" }} />
          <MoreHorizIcon style={{ marginLeft: "5px" }} />
        </div>
      </div>
      <div className="contact__body">
        <div className="contact__online">
          <Avatar
            src="https://scontent.fktm9-2.fna.fbcdn.net/v/t1.6435-9/228280349_3063647310514457_8813709883619372821_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QORMQEs1uoAAX_bgFqi&_nc_ht=scontent.fktm9-2.fna&oh=7b22e2ba27f2655a63aeb2429159669c&oe=619A7CC8"
            style={{ height: "25px", width: "25px" }}
          />{" "}
          <h4>Nawaraj Bhandari</h4>
        </div>
        <div className="contact__online">
          <Avatar
            src="https://scontent.fktm9-2.fna.fbcdn.net/v/t1.6435-9/228280349_3063647310514457_8813709883619372821_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QORMQEs1uoAAX_bgFqi&_nc_ht=scontent.fktm9-2.fna&oh=7b22e2ba27f2655a63aeb2429159669c&oe=619A7CC8"
            style={{ height: "25px", width: "25px" }}
          />{" "}
          <h4>Mukesh Khadka</h4>
        </div>
        <div className="contact__online">
          <Avatar
            src="https://scontent.fktm9-2.fna.fbcdn.net/v/t1.6435-9/228280349_3063647310514457_8813709883619372821_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QORMQEs1uoAAX_bgFqi&_nc_ht=scontent.fktm9-2.fna&oh=7b22e2ba27f2655a63aeb2429159669c&oe=619A7CC8"
            style={{ height: "25px", width: "25px" }}
          />{" "}
          <h4>Niraj Prasad Bhatt</h4>
        </div>
        <div className="contact__online">
          <Avatar
            src="https://scontent.fktm9-2.fna.fbcdn.net/v/t1.6435-9/228280349_3063647310514457_8813709883619372821_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QORMQEs1uoAAX_bgFqi&_nc_ht=scontent.fktm9-2.fna&oh=7b22e2ba27f2655a63aeb2429159669c&oe=619A7CC8"
            style={{ height: "25px", width: "25px" }}
          />{" "}
          <h4>Bishu Thapa</h4>
        </div>
        <div className="contact__online">
          <Avatar
            src="https://scontent.fktm9-2.fna.fbcdn.net/v/t1.6435-9/228280349_3063647310514457_8813709883619372821_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QORMQEs1uoAAX_bgFqi&_nc_ht=scontent.fktm9-2.fna&oh=7b22e2ba27f2655a63aeb2429159669c&oe=619A7CC8"
            style={{ height: "25px", width: "25px" }}
          />{" "}
          <h4>Raj Kumar Khadka</h4>
        </div>
        <div className="contact__online">
          <Avatar
            src="https://scontent.fktm9-2.fna.fbcdn.net/v/t1.6435-9/228280349_3063647310514457_8813709883619372821_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QORMQEs1uoAAX_bgFqi&_nc_ht=scontent.fktm9-2.fna&oh=7b22e2ba27f2655a63aeb2429159669c&oe=619A7CC8"
            style={{ height: "25px", width: "25px" }}
          />{" "}
          <h4>राजन कुमार भण्डारी</h4>
        </div>
        <div className="contact__online">
          <Avatar
            src="https://scontent.fktm9-2.fna.fbcdn.net/v/t1.6435-9/228280349_3063647310514457_8813709883619372821_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QORMQEs1uoAAX_bgFqi&_nc_ht=scontent.fktm9-2.fna&oh=7b22e2ba27f2655a63aeb2429159669c&oe=619A7CC8"
            style={{ height: "25px", width: "25px" }}
          />{" "}
          <h4>Pooja Cafle</h4>
        </div>
        <div className="contact__online">
          <Avatar
            src="https://scontent.fktm9-2.fna.fbcdn.net/v/t1.6435-9/228280349_3063647310514457_8813709883619372821_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QORMQEs1uoAAX_bgFqi&_nc_ht=scontent.fktm9-2.fna&oh=7b22e2ba27f2655a63aeb2429159669c&oe=619A7CC8"
            style={{ height: "25px", width: "25px" }}
          />{" "}
          <h4>Dadhip Bhattarai</h4>
        </div>
        <div className="contact__online">
          <Avatar
            src="https://scontent.fktm9-2.fna.fbcdn.net/v/t1.6435-9/228280349_3063647310514457_8813709883619372821_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QORMQEs1uoAAX_bgFqi&_nc_ht=scontent.fktm9-2.fna&oh=7b22e2ba27f2655a63aeb2429159669c&oe=619A7CC8"
            style={{ height: "25px", width: "25px" }}
          />{" "}
          <h4>Shrawan Xettry</h4>
        </div>
        <div className="contact__online">
          <Avatar
            src="https://scontent.fktm9-2.fna.fbcdn.net/v/t1.6435-9/228280349_3063647310514457_8813709883619372821_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QORMQEs1uoAAX_bgFqi&_nc_ht=scontent.fktm9-2.fna&oh=7b22e2ba27f2655a63aeb2429159669c&oe=619A7CC8"
            style={{ height: "25px", width: "25px" }}
          />{" "}
          <h4>Roshan Khatri</h4>
        </div>
        <div className="contact__online">
          <Avatar
            src="https://scontent.fktm9-2.fna.fbcdn.net/v/t1.6435-9/228280349_3063647310514457_8813709883619372821_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QORMQEs1uoAAX_bgFqi&_nc_ht=scontent.fktm9-2.fna&oh=7b22e2ba27f2655a63aeb2429159669c&oe=619A7CC8"
            style={{ height: "25px", width: "25px" }}
          />{" "}
          <h4>PamMa Geeree</h4>
        </div>
      </div>
    </div>
  );
}

function RightMostElement() {
  return (
    <div className="right__container">
      <BirthdayPost />
      <YourPages />
      <Contacts />
    </div>
  );
}

export default RightMostElement;
