import React from 'react'
import SideBarRow from "./SideBarRow";
import "../css/SideBar.css"
import { Avatar } from "@material-ui/core"
import { useStateValue } from "../contexts/StateProvider"


const SideBar = ({ carRef }) => {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="SideBar" ref={carRef}>
            <ul >
                <a className="SideBar__avatar" href="#!">
                    <Avatar src={user.photoURL} />
                    <h5>{user.displayName}</h5>
                </a>
                <SideBarRow imgSrc={"bi bi-shield-fill-plus"} title={"Covid-19 Information Senter"} iconColor={"purple"} />
                <SideBarRow imgSrc={"bi bi-people-fill"} title={"Friends"} iconColor={"blue"} />
                <SideBarRow imgSrc={"bi bi-camera-fill"} title={"Most Recent"} iconColor={"blue"} />
                <SideBarRow imgSrc={"bi bi-star-fill"} title={"Favorites"} iconColor={"yellow"} />
                <SideBarRow imgSrc={"bi bi-shop"} title={"Marketplace"} iconColor={"blue"} />
                <SideBarRow imgSrc={"bi bi-play-btn-fill"} title={"Watch"} iconColor={"blue"} />
                <SideBarRow imgSrc={"bi bi-calendar2-x"} title={"Events"} iconColor={"red"} />
                <SideBarRow imgSrc={"bi bi-clock"} title={"Memories"} iconColor={"blue"} />
                <SideBarRow imgSrc={"bi bi-arrow-down-circle"} title={"See More"} iconColor={"grey"} />

            </ul>
        </div>
    )
}

export default SideBar
