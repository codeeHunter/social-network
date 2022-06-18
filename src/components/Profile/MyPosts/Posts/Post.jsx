import React from 'react'
import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.logo}>
                <img src={props.logo} alt="" />
            </div>
            <div className={s.posts}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.item}>
                    {props.message}
                </div>
            </div>
        </div>
    );
}

export default Post;