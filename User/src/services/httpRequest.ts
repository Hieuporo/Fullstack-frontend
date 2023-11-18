import axios, { AxiosRequestConfig, AxiosError } from "axios";

// actions
import { setLoading } from "../slices/appSlice";

export type IConfig = AxiosRequestConfig & {
  showSpinner?: boolean;
};

type IAxiosResponse = AxiosError & {
  config: {
    showSpinner?: boolean;
  };
};

function getAccessToken() {
  const accessToken = window.localStorage.getItem("accessToken");
  return accessToken;
}

const requestConfig: IConfig = {
  baseURL: process.env.REACT_APP_ENDPOINT_URL,
  timeout: 5000,
  showSpinner: false,
};

export const axiosInstance = axios.create(requestConfig);

const { CancelToken } = axios;
let cancel: any = null;

export default function initRequest(store: any) {
  let requestCount = 0;

  function decreaseRequestCount() {
    requestCount -= 1;
    if (requestCount === 0) {
      store.dispatch(setLoading(false));
    }
  }

  axiosInstance.interceptors.request.use(
    (config: any) => {
      // cancel token
      if (cancel) {
        cancel(); // cancel request
      }
      config.cancelToken = new CancelToken(function executor(c) {
        cancel = c;
      });

      // show loading
      if (config.showSpinner) {
        requestCount += 1;
        store.dispatch(setLoading(true));
      }

      // add x-auth-token
      const accessToken = getAccessToken();
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error: IAxiosResponse) => {
      if (error.config.showSpinner) {
        decreaseRequestCount();
      }
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (res: any) => {
      if (res.config.showSpinner) {
        decreaseRequestCount();
      }
      return res;
    },
    async (error: IAxiosResponse) => {
      if (
        (error && error.config.showSpinner) ||
        error.code === "ECONNABORTED"
      ) {
        decreaseRequestCount();
      }

      console.log("axiosInstance.interceptors.response.", error.response);

      // handle request timeout
      if (error.code === "ECONNABORTED") {
        store.dispatch(setLoading(false));
      }

      // access token expired
      if (error.response?.status === 401) {
        // error.config._retry = true;
        try {
          const result = await axiosInstance.post("/api/user/refresh-token", {
            data: {
              refresh_token: window.localStorage.getItem("refreshToken"),
            },
          });

          window.localStorage.setItem(
            "accessToken",
            result.data.data.access_token
          );

          axiosInstance.defaults.headers.common.Authorization = `Bearer ${result.data.accessToken}`;

          return await axiosInstance(error.config);
        } catch (err: any) {
          if (err.response && err.response.data) {
            return Promise.reject(err.response.data);
          }
          return Promise.reject(err);
        }
      }

      // handle errors
      switch (error.response?.status) {
        case 400: {
          break;
        }
        case 500: {
          break;
        }
        default:
          break;
      }
      return Promise.reject(error);
    }
  );
}
