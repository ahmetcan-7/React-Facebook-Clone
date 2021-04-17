import React, { useState, useEffect } from 'react'
import StoryReel from "./StoryReel";
import "../css/Feed.css";
import Message from "./Message";
import Post from "./Post";
import db from "../firebase"

const Feed = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snaphot => {
            setPosts(snaphot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        })
    }, [])

    return (
        <div className="Feed">
            <div className="feed__container">
                <StoryReel />
                <Message />
                {posts.map(post => (
                    <Post
                        key={post.id}
                        profilePic={post.data.profilePic}
                        userName={post.data.userName}
                        timestamp={post.data.timestamp}
                        message={post.data.message}
                        img={post.data.img}
                    />
                ))
                }
            </div>

        </div>
    )
}

export default Feed
