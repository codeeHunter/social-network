import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { addMessageActionCreator } from '../../Redux/dialogsReducer'
import { withAuthRedirect } from '../hoc/withAuthRedirect'
import { compose } from 'redux'


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageElement) => {
            dispatch(addMessageActionCreator(newMessageElement))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)
(Dialogs)

