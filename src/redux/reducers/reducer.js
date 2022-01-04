import initialStates from "./initialStates";
import usersActionTypes from "./usersActionTypes";

const userReducer = (state = initialStates, { type, payload }) => {
  switch (type) {
    case usersActionTypes.USERS_LOAD_START:
      return {
        ...state,
        isLoading: true,
        users: null,
        errrorMessage: null,
      };
    case usersActionTypes.USERS_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: payload,
      };
    case usersActionTypes.USERS_LOAD_START:
      return {
        ...state,
        isLoading: false,
        errrorMessage: payload,
      };
    default:
        return state
  }
};

export default userReducer;