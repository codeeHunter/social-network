import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Friends.module.css";

const Friends = (props) => {
    const path = "/user/" + props.id;

    return (
        <div className={s.blockFriends}>
            <NavLink to={path}>
                <div className={s.blockFriend}>
                    <div className={s.logo}>
                        <img src={props.logo} alt="" />
                    </div>
                    <div className={s.name}>
                        <h5>{props.name}</h5>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default Friends;
