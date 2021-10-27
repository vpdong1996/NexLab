import axios, { AxiosInstance } from "axios";
import { config } from "../commons/config";
import { setupInterceptorsTo } from "./interceptors";

const axiosClient: AxiosInstance = setupInterceptorsTo(
  axios.create(config.api)
);

export default axiosClient;
