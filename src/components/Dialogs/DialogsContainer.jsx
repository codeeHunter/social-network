import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { addMessageActionCreator } from "../../Redux/dialogsReducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage,
});

const mapDispatchToProps = (dispatch) => ({
    addMessage: (newMessageElement) => {
        dispatch(addMessageActionCreator(newMessageElement));
    },
});

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
