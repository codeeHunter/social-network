import {profileAPI, usersAPI} from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"

const initialState = {
    posts: [
        {
            name: "Andrew Rybow",
            id: 1,
            message: "New post",
            logo: "https://sun9-25.userapi.com/s/v1/if2/4KrsMuUVgoeRQSJBSoyEjDREFZ0rrLOEFwEec9acY4joTBiRSVJ12yZNPI_nWaRL8RDYex1qzO2lUGl63MVFXJuB.jpg?size=111x134&quality=95&type=album"
        }
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: action.newPostText,
                name: "Andrew",
                logo: "https://sun9-25.userapi.com/s/v1/if2/4KrsMuUVgoeRQSJBSoyEjDREFZ0rrLOEFwEec9acY4joTBiRSVJ12yZNPI_nWaRL8RDYex1qzO2lUGl63MVFXJuB.jpg?size=111x134&quality=95&type=album"
            }
            return {
                ...state,
                message: '',
                posts: [...state.posts, newPost]
            }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos }
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos,
    }
}

export const getUsersProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)

    dispatch(setUserProfile(response.data))

}


export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)

        dispatch(setStatus(response.data))

    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export const savePhoto = (file) => {
    return async (dispatch) => {
        let response = await profileAPI.savePhoto(file)

        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
    }
}


export default profileReducer;