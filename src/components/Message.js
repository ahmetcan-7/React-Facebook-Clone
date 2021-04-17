import React, { useState } from 'react'
import "../css/Message.css";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../contexts/StateProvider";
import firebase from "../firebase";
import db from "../firebase";
const Message = () => {

    console.log(firebase);

    const [{ user }, dispatch] = useStateValue();
    const [value, setValue] = useState("");
    const [imgURL, setImgURL] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            img: imgURL,
            message: value,
            profilePic: user.photoURL,
            timestamp: firebase.Xc.firebase_.firestore.FieldValue.serverTimestamp(),
            userName: user.displayName
        });

        setValue("");
        setImgURL("");
    }
    return (
        <div className="message">

            <div className="message__top">
                <Avatar src={user.photoURL} />
                <form className="message__form">

                    <input
                        className="first-child"
                        placeholder={`What's on your mind,${user.displayName}?`}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    ></input>

                    <input
                        placeholder="Image URL"
                        value={imgURL}
                        onChange={(e) => setImgURL(e.target.value)}>

                    </input>
                    <button onClick={handleSubmit}>hidden</button>
                </form>
            </div>

            <ul className="message__bottom">
                <li><a href="#!"><i className="bi bi-camera-video-fill"></i><span>Live Video</span></a></li>
                <li><a href="#!"><i className="bi bi-file-image"></i><span>Photo/Video</span></a></li>
                <li><a href="#!"><i className="bi bi-emoji-sunglasses"></i><span>Feeling/Activity</span></a></li>

            </ul>
        </div>
    )
}

export default Message
