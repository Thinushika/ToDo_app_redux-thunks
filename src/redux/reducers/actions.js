import usersActionTypes from "./usersActionTypes"

const userLoadStart = () => ({
    type: usersActionTypes.USERS_LOAD_START,
});

const userLoadSuccess = (todos) => ({
    type: usersActionTypes.USERS_LOAD_SUCCESS,
    payload: todos,
});

const userLoadError = (errorMessage) => ({
    type: usersActionTypes.USERS_LOAD_ERROR,
    payload: errorMessage,
});

export default {
    userLoadStart,
    userLoadSuccess,
    userLoadError,
};