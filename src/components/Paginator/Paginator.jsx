import React, { useState } from "react";
import Style from "./../Users/users.module.css";

const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];

    for (let i = 1; i < pagesCount; i++) {
        if (pages.length < totalUsersCount) {
            pages.push(i);
        }
    }

    const portionCount = Math.ceil(pagesCount / pageSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortion = (portionNumber - 1) * pageSize + 1;
    const rightPortion = portionNumber * pageSize;

    return (
        <>
            {portionNumber > 1 && (
                <button
                    className={["btn" + " " + Style.prevBtn]}
                    onClick={() => setPortionNumber(portionNumber - 1)}
                >
                    PREV
                </button>
            )}

            {pages
                .filter((p) => p >= leftPortion && p <= rightPortion)
                .map((p, index) => (
                    <span
                        onClick={() => {
                            onPageChanged(p);
                        }}
                        className={currentPage !== p ? "" : Style.isActive}
                        key={index}
                    >
                        {p}
                    </span>
                ))}
            {portionCount > portionNumber && (
                <button className="btn" onClick={() => setPortionNumber(portionNumber + 1)}>
                    NEXT
                </button>
            )}
        </>
    );
};
export default Paginator;
