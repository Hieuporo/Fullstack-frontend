import axios from "axios";
import { API_BASE_URL } from "../../utils/constants";

export const publicAxiosClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default publicAxiosClient;
