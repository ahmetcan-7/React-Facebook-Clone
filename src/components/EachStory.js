import React from 'react'
import { Avatar } from "@material-ui/core";
import "../css/EachStory.css";

const EachStory = ({ avatarSrc, title, imgSrc }) => {
    return (
        <div className="EachStory" style={{ backgroundImage: `url(${imgSrc})` }}>
            <Avatar src={avatarSrc} className="EachStory__avatar" />
            <h5>{title}</h5>
        </div>
    )
}

export default EachStory
