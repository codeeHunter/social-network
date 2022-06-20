import React, { useState } from "react";
import Style from "./users.module.css";
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

    const portionCount = Math.ceil(pagesCount / props.pageSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortion = (portionNumber - 1) * props.pageSize + 1;
    const rightPortion = portionNumber * props.pageSize;
    const nextPage = () => setPortionNumber(portionNumber + 1);

    return (
        <>
            <div className={Style.number}>
                {portionNumber > 1 && (
                    <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>
                )}

                {pages
                    .filter((p) => p >= leftPortion && p <= rightPortion)
                    .map((p, index) => (
                        <span
                            onClick={() => {
                                props.onPageChanged(p);
                            }}
                            className={props.currentPage !== p ? "" : Style.isActive}
                            key={index}
                        >
                            {p}
                        </span>
                    ))}
                {portionCount > portionNumber && (
                    <button className={"btn"} onClick={() => setPortionNumber(portionNumber + 1)}>
                        NEXT
                    </button>
                )}
            </div>
            <div className={Style.users}>
                {usersCount.map((u) => (
                    <div key={u.id}>
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
                {portionNumber > 1 && (
                    <button className={"btn"} onClick={setPortionNumber(portionNumber - 1)}>
                        PREV
                    </button>
                )}
                {pages
                    .filter((p) => leftPortion && p <= rightPortion)
                    .map((p, index) => (
                        <span
                            onClick={() => {
                                props.onPageChanged(p);
                            }}
                            className={props.currentPage !== p ? "" : Style.isActive}
                            key={index}
                        >
                            {p}
                        </span>
                    ))}
                {portionCount > portionNumber && (
                    <button className={"btn"} onClick={() => setPortionNumber(portionNumber + 1)}>
                        NEXT
                    </button>
                )}
            </div>
        </>
    );
};

export default Users;
