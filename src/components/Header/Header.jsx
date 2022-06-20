import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = ({ isAuth, login, logout }) => (
    <header className={s.headerContent}>
        <div className={s.logo}>
            <NavLink to={isAuth ? "profile" : "login"}>
                <img
                    src="https://venngage-wordpress.s3.amazonaws.com/uploads/2019/04/Travel-Tour-Business-Logo.png"
                    alt={"logo"}
                />
            </NavLink>
        </div>
        <div className={s.loginBlock}>
            {isAuth ? (
                <NavLink to="/profile">
                    {login} -{" "}
                    <button onClick={logout} className={"btn"}>
                        Log out
                    </button>
                </NavLink>
            ) : (
                <NavLink to="login">Login</NavLink>
            )}
        </div>
    </header>
);

export default Header;
