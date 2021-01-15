import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/3.jpg"
          className="post__avatar"
        />
        <h3>{props.username}</h3>
      </div>
      <img className="post__image" src={props.imageURL} alt="react logo" />
      <h4 className="post__text">
        <strong>{props.username}</strong> {props.caption}
      </h4>
    </div>
  );
};

export default Post;
