import React from 'react'
import {NavLink} from 'react-router-dom';
import s from "./Navbar.module.css"
import SidebarContainer from './sidebar/SidebarContainer';

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={(navbar) => navbar.isActive ? s.active : ""}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={(navbar) => navbar.isActive ? s.active : ""}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={(navbar) => navbar.isActive ? s.active : ""}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={(navbar) => navbar.isActive ? s.active : ""}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={(navbar) => navbar.isActive ? s.active : ""}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={(navbar) => navbar.isActive ? s.active : ""}>Settings</NavLink>
            </div>
            <div className={s.sidebar}>
                <SidebarContainer/>
            </div>
        </nav>
    );
}

export default Navbar;