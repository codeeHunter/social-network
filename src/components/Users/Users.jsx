import React from "react";
import s from "./users.module.css";
import users from "./../../assets/users.jpg";
import { NavLink } from "react-router-dom";

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pages = [];

    for (let i = 1; i < pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }
    }

    const usersCount = [];

    for (let i = 0; i < 3; i++) {
        if (props.users[i] !== undefined) {
            usersCount[i] = props.users[i];
        }
    }

    return (
        <>
            <div className={s.number}>
                {pages.map((p, index) => (
                    <span
                        onClick={() => {
                            props.onPageChanged(p);
                        }}
                        className={[s.number, props.currentPage === p && s.active]}
                        key={index}
                    >
                        {p}
                    </span>
                ))}
            </div>
            <div className={s.users}>
                {usersCount.map((u) => (
                    <div key={u.id}>
                        <span>
                            <div className={""}>
                                <NavLink
                                    exact="true"
                                    to={"/profile/" + u.id}
                                    className={s.usersName}
                                >
                                    <img
                                        src={u.photos.small != null ? u.photos.small : users}
                                        alt=""
                                    />
                                </NavLink>
                            </div>
                            <div className={s.userBtn}>
                                {u.followed ? (
                                    <button
                                        className={"btn"}
                                        disabled={props.followingInProgress.some(
                                            (id) => id === u.id
                                        )}
                                        onClick={() => {
                                            props.unfollow(u.id);
                                        }}
                                    >
                                        Unfollow
                                    </button>
                                ) : (
                                    <button
                                        className={"btn"}
                                        disabled={props.followingInProgress.some(
                                            (id) => id === u.id
                                        )}
                                        onClick={() => {
                                            props.follow(u.id);
                                        }}
                                    >
                                        Follow
                                    </button>
                                )}
                            </div>
                        </span>
                        <div className={s.userInfo}>
                            <div>
                                <div className={s.name}>
                                    <span>{u.name}</span>
                                </div>
                                <div className={s.status}>
                                    <span>{u.status}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={s.number + " " + s.numberFooter}>
                {pages.map((p, index) => (
                    <span
                        onClick={() => {
                            props.onPageChanged(p);
                        }}
                        className={[s.number, props.currentPage === p && s.active]}
                        key={index}
                    >
                        {p}
                    </span>
                ))}
            </div>
        </>
    );
};

export default Users;
