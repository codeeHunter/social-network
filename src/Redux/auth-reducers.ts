import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";

export interface InitialStateType {
    userId: number | null;
    login: string | null;
    email: string | null;
    isAuth: boolean;
    captchaUrl: string | null;
}

const initialState: InitialStateType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

interface SetUserDataPayloadType {
    userId: number | null;
    login: string | null;
    isAuth: boolean;
    email: string | null;
}

interface SetUserDataType {
    type: typeof SET_USER_DATA;
    payload: SetUserDataPayloadType;
}

export const setUserData = (
    userId: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
): SetUserDataType => ({
    type: SET_USER_DATA,
    payload: { userId, login, email, isAuth },
});

interface GetCaptchaUrlSuccess {
    type: typeof GET_CAPTCHA_URL_SUCCESS;
    payload: { captchaUrl: string };
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccess => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl },
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getAuthUserData = () => async (dispatch: any) => {
    const response = await authAPI.auth();

    if (response.data.resultCode === 0) {
        const { id, login, email } = response.data.data;
        dispatch(setUserData(id, login, email, true));
    }
};

export const login =
    (email: string, password: string, rememberMe: boolean, captcha: undefined | null) =>
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async (dispatch: any) => {
        const response = await authAPI.login(email, password, rememberMe, captcha);

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
            const message =
                response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit("login", { _error: message }));
        }
    };

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const logout = () => async (dispatch: any) => {
    const response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
};

export default authReducer;
