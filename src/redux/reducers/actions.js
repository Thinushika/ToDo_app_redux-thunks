import usersActionTypes from "./usersActionTypes"

const userLoadStart = () => ({
    type: usersActionTypes.USERS_LOAD_START,
});

const userLoadSuccess = (users) => ({
    type: usersActionTypes.USERS_LOAD_SUCCESS,
    payload: users,
});

const userLoadError = (errorMessage) => ({
    type: usersActionTypes.USERS_LOAD_ERROR,
    payload: errorMessage,
});

export default {
    userLoadStart,
    userLoadSuccess,
    userLoadError,
}