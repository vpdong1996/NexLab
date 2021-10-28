import useSWR, { SWRConfiguration, SWRResponse } from "swr";
import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import axiosClient from "./globalInterceptorSetup";
import { messageNotification } from "../helpers/utils";

export type GetRequest = AxiosRequestConfig | null;

interface Return<Data, Error>
  extends Pick<
    SWRResponse<AxiosResponse<Data>, AxiosError<Error>>,
    "isValidating" | "error" | "mutate"
  > {
  data: Data | undefined;
  response: AxiosResponse<Data> | undefined;
}

export interface Config<Data = unknown, Error = unknown>
  extends Omit<
    SWRConfiguration<AxiosResponse<Data>, AxiosError<Error>>,
    "fallbackData"
  > {
  fallbackData?: Data;
}

export default function useRequest<Data = unknown, Error = unknown>(
  request: GetRequest,
  { fallbackData, ...config }: Config<Data, Error> = {}
): Return<Data, Error> {
  const {
    data: response,
    error,
    isValidating,
    mutate,
  } = useSWR<AxiosResponse<Data>, AxiosError<Error>>(
    request && JSON.stringify(request),
    /**
     * NOTE: Typescript thinks `request` can be `null` here, but the fetcher
     * function is actually only called by `useSWR` when it isn't.
     */
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    () => axiosClient.request<Data>(request!),
    {
      revalidateOnFocus: false,
      revalidateOnMount: config.revalidateOnMount,
    }
  );
  // console.log("-", cache.get(JSON.stringify(request)));
  if (error) {
    messageNotification("error", "Fetch failed!");
  }

  return {
    data: response && response.data,
    response: response,
    error,
    isValidating,
    mutate,
  };
}
