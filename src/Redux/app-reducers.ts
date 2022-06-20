import { getAuthUserData } from "./auth-reducers";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export interface InitialStateType {
    initialized: boolean;
}

const initialState: InitialStateType = {
    initialized: false,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

interface InitializedSuccessType {
    type: typeof INITIALIZED_SUCCESS;
}

export const initializedSuccess = (): InitializedSuccessType => ({
    type: INITIALIZED_SUCCESS,
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const initializeApp = () => (dispatch: any) => {
    const promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializedSuccess());
    });
};

export default appReducer;
