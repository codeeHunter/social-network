import React from 'react'
import { NavLink } from 'react-router-dom';
import s from "./DialogsItem.module.css"

const DialogsItem = (props) => {

    let path = '/dialogs/' + props.id

    return (
        <NavLink to={path}>
            <div className={s.dialogsItem}>
                <div className={s.logo}>
                    <img src={props.logo} alt="" />
                </div>
                <div className={s.rightDialogs}>
                    <div className={s.name}>
                        {props.name}
                    </div>
                    <div className={s.message}>
                        {props.message}
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default DialogsItem;