import todoActionTypes from "./todoActionTypes"

const todoLoadStart = () => ({
    type: todoActionTypes.TODO_LOAD_START,
});

const todoLoadSuccess = (todos) => ({
    type: todoActionTypes.TODO_LOAD_SUCCESS,
    payload: todos,
});

const todoLoadError = (errorMessage) => ({
    type: todoActionTypes.TODO_LOAD_ERROR,
    payload: errorMessage,
});

export default {
    todoLoadStart,
    todoLoadSuccess,
    todoLoadError,
};