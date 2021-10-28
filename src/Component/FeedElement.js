import { Avatar } from "@material-ui/core";
import React from "react";
import "../Style/Feed.css";
import { BiLike, BiComment, BiShare } from "react-icons/bi";

//Got an idea, import like, comment share in div and use as compoent

function FeedElement({
  avatarsrc,
  username,
  visibilityIcon,
  time,
  caption,
  image,
}) {
  return (
    <div className="feed">
      <div className="feed__top">
        {avatarsrc && (
          <Avatar style={{ height: "60px", width: "60px" }} src={avatarsrc} />
        )}
        <div className="feed__top__right">
          <h3>{username}</h3>
          <div className="feed__visibility__time">
            <h5>{time} </h5>
            {visibilityIcon}
          </div>
        </div>
      </div>
      <div className="feed__caption__image">
        <div className="feed__caption">
          <h4>{caption}</h4>
        </div>
        <div className="feed__image">
          <img src={image} alt="caption" width="825px" height="800px" />
        </div>
      </div>
      <div className="feed__like__comment__share__container">
        <div className="feed__like__comment__share">
          <h4>
            <BiLike style={{ fontSize: "35px" }} />{" "}
            <h3 className="like__text">Like</h3>
          </h4>
        </div>
        <div className="feed__like__comment__share">
          <h4>
            <BiComment style={{ fontSize: "35px" }} />{" "}
            <h3 className="like__text">Comment</h3>
          </h4>
        </div>
        <div className="feed__like__comment__share">
          <h4>
            <BiShare style={{ fontSize: "35px" }} />{" "}
            <h3 className="like__text">Share</h3>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default FeedElement;
