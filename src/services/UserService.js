import apiClient from "../helper/apiClient";

// const UsersService = () => {
//   const getAllUsers = () => 
//     apiClient().get("users");
//   return getAllUsers;
// };

// export default UsersService;

class UsersService {
	getAllUsers = () => apiClient().get("todos");
}

export default new UsersService();