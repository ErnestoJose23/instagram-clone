import React, { useEffect, useState } from "react";
import "./Post.css";
import { db } from "../../firebase";
import firebase from "firebase";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import SendIcon from "@material-ui/icons/Send";

import Avatar from "@material-ui/core/Avatar";

function Post({ postId, user, username, caption, imageUrl, liked }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .limit(3)
        .onSnapshot((snapshot) => {
          setComments(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              comment: doc.data(),
            }))
          );
        });
    }
  }, [postId]);

  const postComment = (event) => {
    event.preventDefault();

    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

  const likeImage = (event) => {
    event.preventDefault();
    var userPost = user.displayName + postId;

    var numbers = db.collection("postsLikes").where("userPost", "==", userPost);
    numbers.get().then(function (querySnapshot) {
      if (!querySnapshot.empty) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id);

          db.collection("postsLikes")
            .doc(doc.id)
            .delete()
            .then(function () {
              console.log("Document successfully deleted!");
            })
            .catch(function (error) {
              console.error("Error removing document: ", error);
            });
        });
        const decrement = firebase.firestore.FieldValue.increment(-1);
        const postLiked = db.collection("posts").doc(postId);
        postLiked.update({ liked: decrement });
      } else {
        db.collection("postsLikes").add({
          userPost: userPost,
        });
        const increment = firebase.firestore.FieldValue.increment(1);
        const postLiked = db.collection("posts").doc(postId);
        postLiked.update({ liked: increment });
      }
    });
  };

  return (
    <div className="post">
      <div className="postHeader">
        <Avatar className="avatar" alt="Yet" src="" />
        <h4>{username}</h4>
      </div>
      <img className="postImage" src={imageUrl} />
      <IconButton onClick={likeImage}>
        <FavoriteBorderIcon />
      </IconButton>

      <IconButton>
        <ChatBubbleOutlineIcon />
      </IconButton>
      <IconButton>
        <SendIcon />
      </IconButton>

      <p className="postText">
        <strong>{liked} Likes</strong>
      </p>

      <p className="postText">
        <strong>{username}:</strong> {caption}
      </p>

      <div className="comments">
        {comments.map(({ id, comment }) => (
          <p key={id}>
            <strong>{comment.username}</strong> {comment.text}
          </p>
        ))}
      </div>

      {user && (
        <form className="commentBox">
          <input
            className="input"
            type="text"
            placeholder="Add a commnet..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className="button"
            disabled={!comment}
            type="submit"
            onClick={postComment}
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
