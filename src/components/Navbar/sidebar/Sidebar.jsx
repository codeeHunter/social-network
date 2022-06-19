import React from "react";
import Friends from "./Friends/Friends";
import s from "./Sidebar.module.css";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const friends = useSelector((store) => store.sidebar.friends);

    return (
        <div className={s.sidebar}>
            <div className="">
                <h4>Friends</h4>
            </div>
            <div className={s.blockFriends}>
                {friends.map((f) => (
                    <Friends key={f.id} id={f.id} name={f.name} logo={f.logo} />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
