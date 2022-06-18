import React from 'react'
import Friends from './Friends/Friends';
import s from "./Sidebar.module.css"

const Sidebar = (props) => {
    let state = props.sidebar.friends

    let elementFriend = state.map((f) => <Friends key={f.id} id={f.id} name={f.name} logo={f.logo} />);

    return (
        <div className={s.sidebar}>
            <div className="">
                <h4>Friends</h4>
            </div>
            <div className={s.blockFriends}>
               {elementFriend}
            </div>
        </div>
    );
}

export default Sidebar;