import apiClient from '../helper/apiClient'

const service = () => {
    const getAllUsers = () => apiClient().get("users");
    return getAllUsers;
}

export default service
