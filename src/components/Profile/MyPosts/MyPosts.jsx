import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";
import { validation } from "../../../utils/validators";

const newPost = (props) => (
    <form onSubmit={props.handleSubmit}>
        <div className={s.myPosts}>
            <div className="">
                <Field
                    component={"textarea"}
                    row={"40"}
                    cols={"35"}
                    wrap={"hard"}
                    name={"newPostText"}
                    placeholder={"Введите, что хотите опубликовать"}
                    className={"textArea"}
                    validate={validation}
                />
            </div>
            <div className={s.btnPost}>
                <button className={"btn"}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>{props.postElements}</div>
    </form>
);

const AddNewPostRedux = reduxForm({
    form: "ProfileAddNewPostForm",
})(newPost);

const MyPosts = React.memo((props) => {
    const state = props.profilePage;

    const postElements = [...state.posts]
        .reverse()
        .map((p) => <Post key={p.id} message={p.message} logo={p.logo} name={p.name} />);

    const addPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.myPost}>
            <div className="">
                <AddNewPostRedux onSubmit={addPost} />
                {postElements}
            </div>
        </div>
    );
});

export default MyPosts;
