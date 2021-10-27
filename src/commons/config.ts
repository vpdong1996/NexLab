import { API_URL } from "./constants";

/* eslint-disable import/no-anonymous-default-export */
export const config = {
  api: {
    baseURL: API_URL as string,
    timeout: 25000 as number,
  },
};
