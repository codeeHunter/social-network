import {getAuthUserData} from "./auth-reducers";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

const initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}


export const initializedSuccess = (userId, email, login, isAuth) => {
    return {
        type: INITIALIZED_SUCCESS,
    }
}

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}


export default appReducer;

