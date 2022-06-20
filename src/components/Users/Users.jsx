import React from "react";
import Style from "./users.module.css";
import users from "./../../assets/users.jpg";
import { NavLink } from "react-router-dom";
import Paginator from "../Paginator/Paginator";

const Users = (props) => {
    const usersCount = [];

    for (let i = 0; i < 3; i++) {
        if (props.users[i] !== undefined) {
            usersCount[i] = props.users[i];
        }
    }
    return (
        <>
            <div className={Style.users}>
                {usersCount.map((u) => (
                    <div className={Style.blockUsers} key={u.id}>
                        <span>
                            <div className={""}>
                                <NavLink
                                    exact="true"
                                    to={"/profile/" + u.id}
                                    className={Style.usersName}
                                >
                                    <img
                                        src={u.photos.small != null ? u.photos.small : users}
                                        alt=""
                                    />
                                </NavLink>
                            </div>
                            <div className={Style.userBtn}>
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
                        <div className={Style.userInfo}>
                            <div>
                                <div className={Style.name}>
                                    <span>{u.name}</span>
                                </div>
                                <div className={Style.status}>
                                    <span>{u.status}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={Style.number + " " + Style.numberFooter}>
                <Paginator
                    totalUsersCount={props.totalUsersCount}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    onPageChanged={props.onPageChanged}
                />
            </div>
        </>
    );
};

export default Users;
