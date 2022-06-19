import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN-FOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING";

const initialState = {
    users: [],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true };
                    }
                    return u;
                }),
            };
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false };
                    }
                    return u;
                }),
            };
        case SET_USERS: {
            return {
                ...state,
                users: action.users,
            };
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            };
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count,
            };
        }
        case TOGGLE_IS_FOLLOWING: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id) => id !== action.userId),
            };
        }
        default:
            return state;
    }
};

export const followSuccess = (userId) => ({
    type: FOLLOW,
    userId,
});

export const unfollowSuccess = (userId) => ({
    type: UN_FOLLOW,
    userId,
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users,
});

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});

export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount,
});

export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING,
    isFetching,
    userId,
});

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleFollowingProgress);
    const data = await usersAPI.getUsers(currentPage, pageSize);

    dispatch(setUsers(data.items));
    dispatch(setCurrentPage(currentPage));
    dispatch(setTotalUsersCount(data.totalCount));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    const response = await apiMethod(userId);

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId) => async (dispatch) => {
    const apiMethod = usersAPI.follow.bind(usersAPI);
    const actionCreator = followSuccess;

    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
};

export const unfollow = (userId) => async (dispatch) => {
    const apiMethod = usersAPI.unfollow.bind(usersAPI);
    const actionCreator = unfollowSuccess;

    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
};

export default usersReducer;
