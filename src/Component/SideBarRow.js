import React from "react";
import SideBarRowComponent from "./SideBarRowComponent";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import { FcBarChart, FcCustomerSupport } from "react-icons/fc";
import { MdGroups, MdExpandMore } from "react-icons/md";
import { AiFillShop } from "react-icons/ai";
import { FaUserFriends, FaFacebookMessenger } from "react-icons/fa";
import { RiHandHeartFill } from "react-icons/ri";
import "../Style/SideBarRow.css";

export default function SideBarRow() {
  return (
    <div className="sidebar">
      <SideBarRowComponent
        src="https://scontent.fktm9-2.fna.fbcdn.net/v/t1.6435-9/228280349_3063647310514457_8813709883619372821_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QORMQEs1uoAAX_bgFqi&_nc_ht=scontent.fktm9-2.fna&oh=7b22e2ba27f2655a63aeb2429159669c&oe=619A7CC8"
        title="Nawaraj Bhandari"
      />
      <SideBarRowComponent
        Icon={<FaUserFriends style={{ fontSize: "27", color: "#4267B2" }} />}
        title="Friends"
      />
      <SideBarRowComponent
        Icon={
          <FaFacebookMessenger style={{ fontSize: "27", color: "#4267B2" }} />
        }
        title="Messenger"
      />
      <SideBarRowComponent
        Icon={<MdGroups style={{ fontSize: "27", color: "#4267B2" }} />}
        title="Groups"
      />
      <SideBarRowComponent
        Icon={<AiFillShop style={{ fontSize: "27", color: "#4267B2" }} />}
        title="Marketplace"
      />
      <SideBarRowComponent
        Icon={<OndemandVideoIcon style={{ fontSize: "27" }} />}
        title="Watch"
      />
      <SideBarRowComponent
        Icon={<FcBarChart style={{ fontSize: "27" }} />}
        title="Ads Manager"
      />
      <SideBarRowComponent
        Icon={<RiHandHeartFill style={{ fontSize: "27", color: "#F2C35F" }} />}
        title="Community Help"
      />
      <SideBarRowComponent
        Icon={
          <FcCustomerSupport
            style={{ fontSize: "27" /* , color: "#4267B2" */ }}
          />
        }
        title="Covid-19 Info Center"
      />
      <SideBarRowComponent
        Icon={<MdExpandMore style={{ fontSize: "23" }} />}
        title="See more"
      />
    </div>
  );
}
