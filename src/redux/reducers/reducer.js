import initialStates from "./initialStates";
import usersActionTypes from "./usersActionTypes";

const usersReducer = (state = initialStates, { type, payload }) => {
  switch (type) {
    case usersActionTypes.USERS_LOAD_START:
      return {
        ...state,
        isLoading: true,
        todos: null,
        errrorMessage: null,
      };
    case usersActionTypes.USERS_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: payload,
      };
    case usersActionTypes.USERS_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        errrorMessage: payload,
      };
    default:
        return state;
  }
};

export default usersReducer;