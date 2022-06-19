import { connect } from "react-redux";
import { addPostActionCreator } from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => ({
    profilePage: state.profilePage,
});

const mapDispatchToProps = (dispatch) => ({
    addPost: (newPostText) => {
        dispatch(addPostActionCreator(newPostText));
    },
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
