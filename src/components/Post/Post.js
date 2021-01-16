import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Post.css";
import { db } from "../../firebase";
import firebase from "firebase/app";

const Post = (props) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  useEffect(() => {
    let unsubscribe;
    if (props.postId) {
      unsubscribe = db
        .collection("posts")
        .doc(props.postId)
        .collection("comments")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }

    return () => {
      unsubscribe();
    };
  }, [props.postId]);

  const postComment = (e) => {
    e.preventDefault();
    db.collection("posts").doc(props.postId).collection("comments").add({
      username: props.user.displayName,
      text: comment,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

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
      <div className="post__comments">
        {comments.map((comment, idx) => {
          return (
            <p key={idx}>
              <strong>{comment.username}</strong> {comment.text}
            </p>
          );
        })}
      </div>
      {props.user && (
        <form className="post__commentBox">
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment.."
            type="text"
            className="post__input"
          />
          <button
            disabled={!comment}
            className="post__button"
            type="submit"
            onClick={postComment}
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default Post;
