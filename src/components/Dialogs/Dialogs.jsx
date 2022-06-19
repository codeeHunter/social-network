import React from "react";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Message";
import s from "./Dialogs.module.css";
import Texts from "./Text/Texts";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
    const state = props.dialogsPage;

    const dialogsElements = state.dialogs.map((d) => (
        <DialogsItem name={d.name} id={d.id} key={d.id} logo={d.logo} message={d.message} />
    ));

    const messageElements = state.messages.map((m) => (
        <Message message={m.message} key={m.id} id={m.id} />
    ));

    const addNewMessage = (values) => {
        props.addMessage(values.newMessageElement);
    };

    if (!props.isAuth) {
        return <NavLink to={"/login"} />;
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>{messageElements}</div>
            <div className={s.addMessage}>
                <Texts
                    onSubmit={addNewMessage}
                    messageText={props.messageText}
                    addMessage={props.addMessage}
                    onChangeMessage={props.onChangeMessage}
                />
            </div>
        </div>
    );
};

export default Dialogs;
