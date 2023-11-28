import axios, { AxiosHeaders } from "axios";
import TokenServices from "@/services/TokenServices";

const privateAxiosClient = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

privateAxiosClient.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      (config.headers as AxiosHeaders).set(
        "Authorization",
        `Bearer ${accessToken}`
      );
    }
    return config;
  },
  (error) => Promise.reject(error)
);

privateAxiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalConfig = error?.config;
    if (
      error?.response?.status === 401 &&
      originalConfig &&
      !originalConfig.sent
    ) {
      try {
        originalConfig.sent = true;
        await TokenServices.updateRefreshToken();
        return privateAxiosClient(originalConfig);
      } catch (_error) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");

        return Promise.reject(_error);
      }
    }
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    return Promise.reject(error);
  }
);

export default privateAxiosClient;
