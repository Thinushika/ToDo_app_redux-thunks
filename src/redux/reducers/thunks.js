import TodoService from "../../services/TodoService";
import actions from "./actions";

export const loadTodoAsync = () => (dispatch) => {
  dispatch(actions.todoLoadStart());

  TodoService.getAllUsers()
  .then((response) => dispatch(actions.todoLoadSuccess(response.data)))
  .catch((error) => dispatch(actions.todoLoadError(error.message)));

  
};
