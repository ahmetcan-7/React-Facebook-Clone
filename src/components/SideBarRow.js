import React from 'react'
import "../css/SideBarRow.css";

const SideBarRow = ({ imgSrc, title, iconColor }) => {
    return (
        <div className="sideBarRow">

            <li>
                <a href="#!">
                    <i className={imgSrc} style={{ color: iconColor }}></i>
                    <p >{title}</p>
                </a>

            </li>

        </div>
    )
}

export default SideBarRow
