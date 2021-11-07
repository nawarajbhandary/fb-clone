import React from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { AiOutlineNotification } from "react-icons/ai";
import "../Style/RightMostElement.css";
import { Avatar } from "@material-ui/core";

function BirthdayPost() {
  return (
    <div className="birthday">
      <div className="birthday__top">
        X <FaBirthdayCake style={{ color: "#FFBD35" }} />
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
        <BsThreeDots style={{ marginLeft: "120px" }} />
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
          <p className="page__body__middle-h4">1 Notifications </p>
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
  return <div>All the active status goes here</div>;
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
