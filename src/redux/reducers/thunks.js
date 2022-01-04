import UsersService from "../../services/UserService";
import actions from "./actions";

export const loadUserAsync = () => (dispatch) => {
  dispatch(actions.userLoadStart());

  UsersService.getAllUsers()
  .then((response) => dispatch(actions.userLoadSuccess(response.data)))
  .catch((error) => dispatch(actions.userLoadError(error.message)));

  
};
