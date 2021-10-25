import React from "react";
import "../Style/Header.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlined from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { FaFacebookMessenger } from "react-icons/fa";

function Header() {
  return (
    <div className="header__main">
      <div className="header__left">
        <img
          src="https://th.bing.com/th/id/AMMS_928a62c96ba821e882cb080907bbb897?pid=ImgDet&rs=1"
          alt="facebook-logo"
          height="40px"
        />
      </div>
      <div className="header__input">
        <SearchIcon fontSize="Large" backgroundColor="#e4e6eb" />
        <input type="text" placeholder="Search Facebook" />
      </div>
      <div className="header__middle">
        <div className="header-option header-option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header-option header-option--active">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header-option header-option--active">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header-option header-option--active">
          <StorefrontOutlined fontSize="large" />
        </div>
        <div className="header-option header-option--active">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header-right">
        <div className="header__info">
          <Avatar src="https://scontent.fktm9-2.fna.fbcdn.net/v/t1.6435-9/228280349_3063647310514457_8813709883619372821_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QORMQEs1uoAAX_bgFqi&_nc_ht=scontent.fktm9-2.fna&oh=7b22e2ba27f2655a63aeb2429159669c&oe=619A7CC8" />
          <h4>Nawaraj</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <FaFacebookMessenger />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
