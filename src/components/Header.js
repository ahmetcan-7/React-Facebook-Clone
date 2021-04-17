import React from 'react'
import "../css/Header.css"
import { Avatar } from "@material-ui/core"
import { useStateValue } from "../contexts/StateProvider"

const Header = () => {

    const [{ user }, dispatch] = useStateValue();



    return (

        <div className="my_container">
            <div className="header">
                <div className="header__left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/900px-Facebook_f_logo_%282019%29.svg.png" alt="" />

                    <form>
                        <div>
                            <i className="bi bi-search " ></i>
                            <input type="text" placeholder="Search Facebook" />
                        </div>
                    </form>

                </div>

                <div className="header__center">
                    <ul>

                        <li><a href="#!"><i className="bi bi-house-door"></i></a></li>
                        <li><a href="#!"> <i className="bi bi-collection-play"></i></a></li>
                        <li><a href="#!"><i className="bi bi-shop-window"></i></a></li>
                        <li><a href="#!"><i className="bi bi-person-circle"></i></a></li>
                        <li><a href="#!"><i className="bi bi-controller"></i></a></li>

                    </ul>

                </div>

                <div className="header__right">

                    <ul>
                        <li>
                            <a className="Header__avatar" href="#!">
                                <Avatar src={user.photoURL} />
                                <h5>{user.displayName}</h5>
                            </a>
                        </li>
                        <li><a href="#!"><i className="bi bi-plus-circle-fill"></i></a></li>
                        <li><a href="#!"><i className="bi bi-chat-text-fill"></i></a></li>
                        <li><a href="#!"><i className="bi bi-bell-fill"></i></a></li>
                        <li><a href="#!"><i className="bi bi-caret-down-fill"></i></a></li>


                    </ul>


                </div>
            </div>
        </div>
    )
}

export default Header


