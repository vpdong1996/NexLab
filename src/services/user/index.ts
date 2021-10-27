import axiosClient from "../globalInterceptorSetup";

export const USER_URL = "/users";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: Address;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipCode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

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
