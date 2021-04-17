import React from 'react'
import "../css/Post.css"
import { Avatar } from "@material-ui/core";
const Post = ({ profilePic, userName, timestamp, message, img }) => {
    console.log(timestamp);
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar" />

                <div className="post__topInfo">
                    <h3>{userName}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__img">
                <img src={img} alt=""></img>
            </div>

            <div className="post__options">
                <div className="post__option">
                    <i className="bi bi-hand-thumbs-up-fill"></i>
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <i className="bi bi-chat-left-text"></i>
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <i className="bi bi-cursor-fill"></i>
                    <p>Share</p>
                </div>

            </div>
        </div>
    )
}

export default Post
