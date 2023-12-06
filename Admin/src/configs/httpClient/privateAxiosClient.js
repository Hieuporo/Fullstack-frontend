import axios from "axios";
import { API_BASE_URL } from "../../utils/constants";

const privateAxiosClient = axios.create({
  withCredentials: true,
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const renewAccessToken = async () => {
  const data = await axios.post(
    "/Account/Refresh",
    {
      refreshToken: window.localStorage.getItem("refreshToken"),
      accessToken: window.localStorage.getItem("accessToken"),
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return data;
};

privateAxiosClient.interceptors.request.use(
  async (config) => {
    const accessToken = window.localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

privateAxiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalConfig = error?.config;
    if (error?.response?.status === 401 && originalConfig && !originalConfig.sent) {
      try {
        originalConfig.sent = true;
        const { accessToken, refreshToken } = await renewAccessToken();
        if (accessToken != null && refreshToken != null) {
          return privateAxiosClient(originalConfig);
        }
      } catch (_error) {
        window.localStorage.clear("user");
        window.localStorage.clear("authenticated");
        window.localStorage.clear("accessToken");
        window.localStorage.clear("refreshToken");
        return Promise.reject(_error);
      }
    }
    window.localStorage.clear("user");
    window.localStorage.clear("authenticated");
    window.localStorage.clear("accessToken");
    window.localStorage.clear("refreshToken");
    return Promise.reject(error);
  }
);

export default privateAxiosClient;
