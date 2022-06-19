import React from "react";
import { reduxForm, Field } from "redux-form";
import s from "./Texts.module.css";

const Texts = (props) => (
    <div className={s.text}>
        <form onSubmit={props.handleSubmit}>
            <div className={s.text}>
                <Field
                    component={"textarea"}
                    name={"newMessageElement"}
                    placeholder={"Enter your message"}
                    className={"textArea"}
                />
            </div>
            <div className={s.addText}>
                <button className={"btn"}>Отправить сообщение</button>
            </div>
        </form>
    </div>
);

const AddMessageFormRedux = reduxForm({
    form: "dialogAddMessageForm",
})(Texts);

export default AddMessageFormRedux;
