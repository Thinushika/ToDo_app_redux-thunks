import initialStates from "./initialStates";
import todoActionTypes from "./todoActionTypes";

const todoReducer = (state = initialStates, { type, payload }) => {
  switch (type) {
    case todoActionTypes.TODO_LOAD_START:
      return {
        ...state,
        isLoading: true,
        todos: null,
        errrorMessage: null,
      };
    case todoActionTypes.TODO_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: payload,
      };
    case todoActionTypes.TODO_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        errrorMessage: payload,
      };
    default:
        return state;
  }
};

export default todoReducer;