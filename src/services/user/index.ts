import { USER_URL } from "../../commons/constants";
import { User } from "../../types/User";
import axiosClient from "../globalInterceptorSetup";

export const UserService = {
  getUsers: () => {
    return axiosClient
      .get<User[]>(USER_URL)
      .then((response) => response)
      .catch((error) => error);
  },

  getUserById: (id: number) => {
    return axiosClient
      .get<User>(USER_URL, { params: { id } })
      .then((response) => response)
      .catch((error) => error);
  },
};
